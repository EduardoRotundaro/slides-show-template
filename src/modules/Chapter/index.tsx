import { FC } from 'react';

type PropsType = {
};

import { Module } from './styles';

import Section from '../../components/Section';
import Container from '../../components/Container';

const Chapter: FC<PropsType> = function (props) {
  const {} = props;

  return (
    <Module>
      <Section>
        <Container>
        </Container>
      </Section>
    </Module>
  );
};

export default Chapter;
