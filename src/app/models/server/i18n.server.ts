import { createCookie } from '@remix-run/node';
import { RemixI18Next } from 'remix-i18next/server';

import * as i18n from '~/app/models/helpers/i18n';

export const localeCookie = createCookie('lng', {
  path: '/',
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
  httpOnly: true,
});

export default new RemixI18Next({
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: localeCookie,
  },
  i18next: {
    ...i18n,
  },
});
