import packageInfos from '../../package.json';

import { ComponentsThemeType, ConstantType } from './types';

export const APP_VERSION: ConstantType = packageInfos.version;

export const THEME: ComponentsThemeType = {
  colors: {
    theme1: '#564138',
    theme2: '#2E86AB',
    theme3: '#F6F5AE',
    theme4: '#F5F749',
    theme5: '#F24236',
    white: '#FDFEFE',
    gray: '#ECF0F1',
    black: '#17202A',
  },
  fonts: {
    primary: '\'Lato\', sans-serif',
    secondary: 'Tahoma, sans-serif',
  },
  breakpoints: {
    large: '992px',
  },
};
