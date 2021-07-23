import { FC } from 'react';

type PropsType = {
  children: string,
};

import { Heading2 } from './styles';

const H2: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Heading2>
      {children}
    </Heading2>
  );
};

export default H2;
