import { FC, ReactNode } from 'react';

import { Cont } from './styles';

type PropsType = {
  children?: ReactNode,
  className?: string,
};

const Container: FC<PropsType> = function (props) {
  const {
    children,
    className,
  } = props;

  return (
    <Cont className={className || ''}>
      {children}
    </Cont>
  );
};

export default Container;
