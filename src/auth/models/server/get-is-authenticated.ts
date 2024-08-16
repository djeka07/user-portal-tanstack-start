'use server';

import { isBefore } from '~/app/models/helpers/date';
import { getSession } from './session';

export default async (): Promise<boolean> => {
  const session = await getSession();
  const payload = session?.data.token;
  if (!payload) {
    return false;
  }
  const isAuthenticated = isBefore(payload.expires, Date.now());
  return isAuthenticated;
};
