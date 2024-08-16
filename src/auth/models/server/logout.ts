'use server';

import { redirect } from '@tanstack/react-router';
import { clearSession } from './session';

export default async () => {
  await clearSession();
  throw redirect({ to: '/login' });
};
