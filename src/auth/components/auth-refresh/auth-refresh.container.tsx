import { createDate } from '~/app/models/helpers/date';
import { ProgressState } from '~/app/models/types/fetch.state';

import { useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useAuth } from '~/auth/models/hooks/use-auth';
import refreshAuthentication from '~/auth/models/server/refresh-authentication';
import AuthRefresh from './auth-refresh';

const AuthRefreshContainer = () => {
  const [state, { updateToken }] = useAuth();
  const location = useLocation();

  const [progress, setProgress] = useState<ProgressState<{ show: boolean }>>({
    state: 'initial',
    data: { show: false },
  });


  const refresh = async (token: string, timeout: NodeJS.Timeout) => {
    setProgress((prev) => ({ ...prev, data: { show: true }, state: 'pending' }));
    const response = await refreshAuthentication(token);
    updateToken(response);
    setProgress((prev) => ({ ...prev, state: 'ready' }));
    timeout = setTimeout(() => {
      setProgress((prev) => ({ ...prev, data: { show: false } }));
    }, 3000);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const interval = setInterval(
      async () => {
        const expires = createDate(state.token?.expires).subtract(
          parseInt(import.meta.env.VITE_AUTH_SUBSTRACT_MS, 10),
          'milliseconds',
        );
        if (createDate().isAfter(expires)) {
          await refresh(state.token!.refreshToken, timeout);
        }
      },
      parseInt(import.meta.env.VITE_AUTH_CHECK_INTERVAL_MS, 10),
    );
    return () => {
      clearInterval(interval);
      clearTimeout(timeout)
    };
  }, [state?.token?.refreshToken]);

  return (
    <AuthRefresh
      state={progress.state}
      show={progress.data?.show || false}
      onClose={() => setProgress((p) => ({ ...p, data: { show: false } }))}
    />
  );
};

export default AuthRefreshContainer;
