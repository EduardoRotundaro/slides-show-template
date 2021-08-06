import { FC } from 'react';

import { ComponentPropsType } from './types';
import { Heading6 } from './styles';

const H6: FC<ComponentPropsType> = function (props) {
  const {
    children,
    className,
    align,
    color,
    font,
    weight,
  } = props;

  return (
    <Heading6
      className={className || ''}
      align={align}
      color={color}
      font={font}
      weight={weight}
    >
      {children}
    </Heading6>
  );
};

export default H6;
