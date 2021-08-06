import { FC } from 'react';

import { ComponentPropsType } from './types';
import { Heading3 } from './styles';

const H3: FC<ComponentPropsType> = function (props) {
  const {
    children,
    className,
    align,
    color,
    font,
    weight,
  } = props;

  return (
    <Heading3
      className={className || ''}
      align={align}
      color={color}
      font={font}
      weight={weight}
    >
      {children}
    </Heading3>
  );
};

export default H3;
