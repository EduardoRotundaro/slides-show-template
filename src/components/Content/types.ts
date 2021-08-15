import { FC, ReactNode } from "react";

type ComponentProps = {
  children: ReactNode,
};

export type ComponentType = FC<ComponentProps>;
