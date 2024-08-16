import { createFileRoute } from '@tanstack/react-router';
import Link from '~/app/components/links/link';

export const Route = createFileRoute('/test')({
  component: () => (
    <div>
      Hello /test! <Link href="/">Hem</Link>
    </div>
  ),
});
