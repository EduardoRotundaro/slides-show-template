import { FC } from 'react';

import { ContentType } from '../../data/types';

import { Module } from './styles';
import Section from '../../components/Section';
import Container from '../../components/Container';

type PropsType = {
  content: ContentType,
};

const PlainText: FC<PropsType> = function (props) {
  const { content } = props;

  return (
    <Module>
      <Section background={content.background}>
        <Container>
        </Container>
      </Section>
    </Module>
  );
};

export default PlainText;
