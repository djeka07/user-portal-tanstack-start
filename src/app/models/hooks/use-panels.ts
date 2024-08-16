import { useContext } from 'react';
import { PanelsContext } from '../contexts/panel.context';

export const usePanels = () => useContext(PanelsContext);
