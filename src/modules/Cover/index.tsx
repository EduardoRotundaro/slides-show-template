import { FC } from 'react';

import { ContentType } from '../../data/types';
import { 
  CONTENT_NAME,
  CONTENT_DATE,
} from '../../data/metadata';

import { Module } from './styles';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Column from '../../components/Column';
import H1 from '../../components/H1';
import P from '../../components/P';

type PropsType = {
  content: ContentType,
};

const Cover: FC<PropsType> = function (props) {
  const { content } = props;

  return (
    <Module>
      <Section background={content.background}>
        <Container>
          <Row className="content" verticalAlignCenter>
            <Column className="popIn duration-500">
              <Row>
                <Column className="heading">
                  <H1 weight="heavy">{CONTENT_NAME}</H1>
                </Column>
                <Column className="date">
                  <P size="small" weight="bold" color="white">
                    {CONTENT_DATE}
                  </P>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Section>
    </Module>
  );
};

export default Cover;
