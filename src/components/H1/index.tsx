import { FC } from 'react';

type PropsType = {
  children: string,
};

import { Heading1 } from './styles';

const H1: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Heading1>
      {children}
    </Heading1>
  );
};

export default H1;
