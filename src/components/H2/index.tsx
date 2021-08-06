import { FC } from 'react';

import { ComponentPropsType } from './types';
import { Heading2 } from './styles';

const H2: FC<ComponentPropsType> = function (props) {
  const {
    children,
    className,
    align,
    color,
    font,
    weight,
  } = props;

  return (
    <Heading2
      className={className || ''}
      align={align}
      color={color}
      font={font}
      weight={weight}
    >
      {children}
    </Heading2>
  );
};

export default H2;
