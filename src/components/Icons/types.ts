import { FC } from "react";

type ColorsType = 'white';

type IconProps = {
  color?: ColorsType,
};

export type IconType = FC<IconProps>;

export type GetColorsFnType = (color?: ColorsType) => string;
