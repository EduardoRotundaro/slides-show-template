import { FC, ReactNode } from 'react';

type PropsType = {
  children?: ReactNode,
};

import { List } from './styles';

const Summary: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <List>
      {children}
    </List>
  );
};

export default Summary;
