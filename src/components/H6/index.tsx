import { FC } from 'react';

type PropsType = {
  children: string,
};

import { Heading6 } from './styles';

const H6: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Heading6>
      {children}
    </Heading6>
  );
};

export default H6;
