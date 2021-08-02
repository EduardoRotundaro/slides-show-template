import { FC } from 'react';

import { Paragraph } from './styles';

type PropsType = {
  children: string,
};

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
