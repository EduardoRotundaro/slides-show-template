import { FC } from 'react';

import { ComponentPropsType } from './types';
import { Heading5 } from './styles';

const H5: FC<ComponentPropsType> = function (props) {
  const {
    children,
    className,
    align,
    color,
    font,
    weight,
  } = props;

  return (
    <Heading5
      className={className || ''}
      align={align}
      color={color}
      font={font}
      weight={weight}
    >
      {children}
    </Heading5>
  );
};

export default H5;
