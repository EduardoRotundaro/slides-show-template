import { FC } from 'react';

type PropsType = {
  children: string,
};

import { Paragraph } from './styles';

const P: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Paragraph>
      {children}
    </Paragraph>
  );
};

export default P;
