import { FC, ReactNode } from 'react';

type PropsType = {
  children?: ReactNode,
};

import { Container } from './styles';

const Section: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Container>
      {children}
    </Container>
  );
};

export default Section;
