import { FC, ReactNode } from 'react';

import { Container } from './styles';

type PropsType = {
  children?: ReactNode,
  background: '1' | '2' | '3' | '4' | '5' | 'black' | 'white',
};

const Section: FC<PropsType> = function (props) {
  const {
    children,
    background,
  } = props;

  return (
    <Container background={background}>
      {children}
    </Container>
  );
};

export default Section;
