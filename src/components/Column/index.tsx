import { FC, ReactNode } from 'react';

type PropsType = {
  children?: ReactNode,
};

import { Col } from './styles';

const Column: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Col>
      {children}
    </Col>
  );
};

export default Column;
