import { FC } from 'react';

type PropsType = {
  children: string,
};

import { Heading3 } from './styles';

const H3: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Heading3>
      {children}
    </Heading3>
  );
};

export default H3;
