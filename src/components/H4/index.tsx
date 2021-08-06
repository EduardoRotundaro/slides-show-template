import { FC } from 'react';

import { ComponentPropsType } from './types';
import { Heading4 } from './styles';

const H4: FC<ComponentPropsType> = function (props) {
  const {
    children,
    className,
    align,
    color,
    font,
    weight,
  } = props;

  return (
    <Heading4
      className={className || ''}
      align={align}
      color={color}
      font={font}
      weight={weight}
    >
      {children}
    </Heading4>
  );
};

export default H4;
