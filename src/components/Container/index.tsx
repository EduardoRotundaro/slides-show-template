import { FC, ReactNode } from 'react';

type PropsType = {
  children?: ReactNode,
};

import { Cont } from './styles';

const Container: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Cont>
      {children}
    </Cont>
  );
};

export default Container;
