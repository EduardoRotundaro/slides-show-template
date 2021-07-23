import { FC } from 'react';

type PropsType = {
  children: string,
};

import { Heading4 } from './styles';

const H4: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Heading4>
      {children}
    </Heading4>
  );
};

export default H4;
