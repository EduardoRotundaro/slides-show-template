import { FC } from 'react';

import { ContentType } from '../../data/types';
import { AUTHOR } from '../../data/metadata';

import profilePhoto from '../../assets/images/profile.jpg';

import { 
  Module,
  Profile,
} from './styles';
import Section from '../../components/Section';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Column from '../../components/Column';

type PropsType = {
  content: ContentType,
};

const About: FC<PropsType> = function (props) {
  const { content } = props;

  return (
    <Module>
      <Section background={content.background}>
        <Container className="popIn duration-500">
          <Row>
            <Column className="profile">
              <Profile>
                <div className="card">
                  <div className="image">
                    <img src={profilePhoto} alt="" />
                  </div>
                  <div className="name">
                    <h2>{AUTHOR}<br/><span>Autor</span></h2>
                  </div>
                </div>
              </Profile>
            </Column>
          </Row>
        </Container>
      </Section>
    </Module>
  );
};

export default About;
