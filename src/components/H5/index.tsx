import { FC } from 'react';

type PropsType = {
  children: string,
};

import { Heading5 } from './styles';

const H5: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Heading5>
      {children}
    </Heading5>
  );
};

export default H5;
