import { ReactNode } from 'react';

export type ComponentsThemeType = {
  colors: {
    theme1: string,
    theme2: string,
    theme3: string,
    theme4: string,
    theme5: string,
    white: string,
    gray: string,
    black: string,
  },
  fonts: {
    primary: string,
    secondary: string,
  },
  breakpoints: {
    small: string,
    medium: string,
    large: string,
    extraLarge: string,
    fullHD: string,
  },
};

export type ConstantType = string;

type SlideTypes = 'about' | 'attachment' | 'chapter' | 'cover' | 'media' | 'plainText' | 'references' | 'summary' | 'thanks';

type BackgroundTypes = '1' | '2' | '3' | '4' | '5';

export type ContentType = {
  type: SlideTypes,
  background: BackgroundTypes,
  heading?: string,
  paragraphs: Array<string>,
  attachment?: {
    image?: ReactNode,
    width?: string,
  },
};

export type ContentsType = Array<ContentType>;
