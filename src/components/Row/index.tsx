import { FC, ReactNode } from 'react';

type PropsType = {
  children?: ReactNode,
};

import { RowContainer } from './styles';

const Row: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <RowContainer>
      {children}
    </RowContainer>
  );
};

export default Row;
