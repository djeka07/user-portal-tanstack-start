import { AnimatePresence, motion } from 'framer-motion';
import { KeyboardEvent, useCallback } from 'react';
import { Spinner } from '~/app/components/spinners';
import { isEnter } from '~/app/models/helpers/keyboard';
import { FetchState } from '~/app/models/types/fetch.state';
import { motionClass, root } from './auth-refresh.css';
import { Icon, Typography } from '@djeka07/ui';

type AuthRefresh = {
  onClose: () => void;
  show: boolean;
  state: FetchState;
};

const AuthRefresh = ({ onClose, show, state }: AuthRefresh) => {
  const enter = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (isEnter(e)) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <AnimatePresence>
      {show && (
        <motion.div className={motionClass} initial={{ x: '100%' }} animate={{ x: '0px' }} exit={{ x: '100%' }}>
          <div tabIndex={0} role="button" onKeyDown={enter} className={root} onClick={onClose}>
            {state === 'pending' && (
              <>
                <Spinner margin="no" size="small" color="dark" />
                <Typography size="small" weight="bold" color="grey700">
                  Refreshing token
                </Typography>
              </>
            )}
            {state === 'ready' && (
              <>
                <Icon size="large" color="success" name="UserSuccess" />
                <Typography size="small" weight="bold" color="success">
                  Token refreshed
                </Typography>
              </>
            )}
            {state === 'errored' && (
              <>
                <Spinner margin="no" size="small" color="error" />
                <Typography size="small" weight="bold" color="grey700">
                  Something went wrong, logging out
                </Typography>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthRefresh;
