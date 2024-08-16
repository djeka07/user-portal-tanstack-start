'use server';
import { Authorization } from '~/app/models/helpers/token';
import { SessionData, getEvent, getRequestURL, useSession } from 'vinxi/http';
import { redirect } from '@tanstack/react-router';

export async function getSession() {
  try {
    const session = await useSession({
      password: process.env.VITE_SESSION_PASSWORD || ('thisisasuperlongpasswordthatissafe' as string),
    });
    return session;
  } catch (error) {
    return undefined;
  }
}

export async function requireUserId(redirectTo?: string) {
  const session = await getSession();
  const userId = session?.data?.userId;
  if (!userId || typeof userId !== 'string') {
    const redirectPath = redirectTo || getRequestURL(getEvent()!).pathname;
    const searchParams = new URLSearchParams([['redirectTo', redirectPath]]);
    throw redirect({ to: '/login', search: searchParams });
  }
  return userId;
}

export async function clearSession() {
  const session = await getSession();
  await session?.update((d) => {
    d.token = undefined;
    return d;
  });
}

export async function createUserSession(token: Authorization) {
  const session = await getSession();
  await session?.update((d: SessionData) => {
    d.token = token;
    return d;
  });
  return;
}
