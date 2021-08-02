import packageInfos from '../../package.json';

import { ComponentsThemeType, ConstantType } from './types';

export const APP_VERSION: ConstantType = packageInfos.version;

export const THEME: ComponentsThemeType = {
  colors: {
    theme1: '#ECA400',
    theme2: '#EAF8BF',
    theme3: '#006992',
    theme4: '#27476E',
    theme5: '#001D4A',
    white: '#FDFEFE',
    gray: '#ECF0F1',
    black: '#17202A',
  },
  fonts: {
    primary: '\'Lato\', sans-serif',
    secondary: 'Tahoma, sans-serif',
  },
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px',
    extraLarge: '1224px',
    fullHD: '1824px',
  },
};
