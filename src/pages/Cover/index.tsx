import { FC } from 'react';

import { ContentType } from '../../data/types';
import { 
  CONTENT_NAME,
  CONTENT_DATE,
} from '../../data/metadata';

import { Module } from './styles';
import Row from '../../components/Row';
import Column from '../../components/Column';
import H1 from '../../components/H1';
import P from '../../components/P';

type PropsType = {
  content: ContentType,
};

const Cover: FC<PropsType> = function (props) {
  return (
    <Module className="popIn duration-600">
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
    </Module>
  );
};

export default Cover;
