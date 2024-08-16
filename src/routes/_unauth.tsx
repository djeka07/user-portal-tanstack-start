import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router';
import { UnauthLayout as Layout } from '~/auth/components/layouts';

type Search = { reason?: string };

export const Route = createFileRoute('/_unauth')({
  component: UnAuthLayout,
});

function UnAuthLayout() {
  const location = useLocation();
  const reason = (location.search as Search).reason;
  return (
    <Layout reason={reason || undefined}>
      <Outlet />
    </Layout>
  );
}
