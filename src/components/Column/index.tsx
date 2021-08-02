import { FC, ReactNode } from 'react';

import { Col } from './styles';

type PropsType = {
  children?: ReactNode,
  common?: string,
  lg?: string,
  className?: string,
};

const Column: FC<PropsType> = function (props) {
  const {
    children,
    className,
    common,
    lg,
  } = props;

  return (
    <Col className={className || ''} common={common} lg={lg}>
      {children}
    </Col>
  );
};

export default Column;
