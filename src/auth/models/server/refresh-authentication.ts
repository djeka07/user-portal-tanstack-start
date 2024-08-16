'use server';
import { Authorization, createToken } from '~/app/models/helpers/token';
import { clearSession, createUserSession } from './session';
import { refreshRequest } from '~/users/models/services/user.service';

export default async (token: string): Promise<Authorization> => {
  try {
    const response = await refreshRequest({ token });
    const auth = createToken(response);
    await createUserSession(auth);
    return auth;
  } catch (err) {
    await clearSession();
    throw err;
  }
};
