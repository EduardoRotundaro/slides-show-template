import { FC } from 'react';

import { ComponentPropsType } from './types';
import { Paragraph } from './styles';

const P: FC<ComponentPropsType> = function (props) {
  const {
    children,
    className,
    align,
    color,
    font,
    size,
    weight,
  } = props;

  return (
    <Paragraph
      className={className || ''}
      align={align}
      color={color}
      font={font}
      size={size}
      weight={weight}
    >
      {children}
    </Paragraph>
  );
};

export default P;
