import { hydrateRoot } from 'react-dom/client';
import { StartClient } from '@tanstack/start';
import { createRouter } from './router';
import { ColorModeProvider } from './app/models/contexts/color-mode.context';
const router = createRouter();

hydrateRoot(
  document.getElementById('root')!,
  <ColorModeProvider initial="dark">
    <StartClient router={router} />
  </ColorModeProvider>,
);
