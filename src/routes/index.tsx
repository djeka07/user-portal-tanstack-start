import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Link } from '~/app/components/links';
import hej from '~/utils/hej';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const [val, setVal] = useState<string>('Loading...');

  useEffect(() => {
    const h = async () => {
      const response = await hej();
      console.log(response);
      setVal(response);
    };
    h();
  }, []);
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {val}
      <Link href="/test">Test</Link>
    </div>
  );
}
