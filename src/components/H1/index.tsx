import { FC } from 'react';

import { Heading1 } from './styles';

type PropsType = {
  children: string,
};

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
