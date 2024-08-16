'use server';
import { SchemaError, validateSchema } from '~/app/models/helpers/schema';
import { createToken } from '~/app/models/helpers/token';
import { createUserSession } from './session';
import { loginRequest } from '~/users/models/services/user.service';
import { redirect } from '@tanstack/react-router';
import { loginSchema } from '~/auth/components/login-forms/login-form.schema';
import { FailResponse } from '~/app/models/types/action';

export default async (form: FormData) => {
  const email = form.get('email') as string;
  const password = form.get('password') as string;
  const redirectTo = form.get('redirectTo') as string;
  const { isValid, formErrors } = validateSchema(loginSchema, { email, password });
  if (!isValid) {
    return new FailResponse(formErrors)
  }
  try {
    const response = await loginRequest({ email, password });
    await createUserSession(createToken(response));
  } catch (error) {
    return new SchemaError('form.login.error');
  }
  throw redirect({ to: redirectTo });
};
