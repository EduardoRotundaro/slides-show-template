import { FC } from 'react';

import { ComponentPropsType } from './types';
import { Heading1 } from './styles';

const H1: FC<ComponentPropsType> = function (props) {
  const {
    children,
    className,
    align,
    color,
    font,
    weight,
  } = props;

  return (
    <Heading1
      className={className || ''}
      align={align}
      color={color}
      font={font}
      weight={weight}
    >
      {children}
    </Heading1>
  );
};

export default H1;
