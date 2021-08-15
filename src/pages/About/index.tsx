import { FC } from 'react';

import { ContentType } from '../../data/types';
import { 
  AUTHOR_FULL,
  AUTHOR_LOCATION,
  AUTHOR_AGE,
  AUTHOR_GRADUATION,
  AUTHOR_GRADUATE_FROM,
} from '../../data/metadata';

import profilePhoto from '../../assets/images/profile.jpg';

import { 
  Module,
  Profile,
  AboutItem,
} from './styles';
import Row from '../../components/Row';
import Column from '../../components/Column';
import P from '../../components/P';;

type PropsType = {
  content: ContentType,
};

const About: FC<PropsType> = function (props) {
  return (
    <Module className="popIn duration-600">
      <Row horizontalAlignCenter>
        <Column lg="320px">
          <Profile>
            <img src={profilePhoto} alt="" />
          </Profile>
        </Column>
        <Column lg="320px">
          <Profile>
            <img src={profilePhoto} alt="" />
          </Profile>
        </Column>
        <Column lg="320px">
          <Profile>
            <img src={profilePhoto} alt="" />
          </Profile>
        </Column>
      </Row>
      <Row className="about">
        <Column>
          <AboutItem>
            <P color="white" weight="bold" size="extra-large">
              {AUTHOR_FULL}
            </P>
          </AboutItem>
          <AboutItem>
            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
              <g>
                <path
                  transform="rotate(0,9,9) translate(0.787499785423279,0) scale(0.5625,0.5625)  " 
                  fill="#fff" 
                  d="M9.6999674,17.900024L19.500033,17.900024C24.900004,17.900024 29.2,22 29.2,27.100006 29.2,28.900024 28.7,30.600006 27.699998,32L1.5000024,32C0.50000076,30.600006 -4.9178198E-08,28.900024 0,27.100006 -4.9178198E-08,22 4.299995,17.900024 9.6999674,17.900024z M14.699976,0C18.800019,0 22.100013,3.3000183 22.100013,7.4000244 22.100013,11.5 18.800019,14.800018 14.699976,14.800018 10.599993,14.800018 7.2999998,11.5 7.2999998,7.4000244 7.3999758,3.3000183 10.699969,0 14.699976,0z" 
                />
              </g>
            </svg>
            <P size="large" color="white" weight="bold">
              {AUTHOR_AGE}
            </P>
          </AboutItem>
          <AboutItem>
            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
              <g>
                <path
                  transform="rotate(0,9,9) translate(0.787499785423279,0) scale(0.5625,0.5625)  " 
                  fill="#fff" 
                  d="M9.6999674,17.900024L19.500033,17.900024C24.900004,17.900024 29.2,22 29.2,27.100006 29.2,28.900024 28.7,30.600006 27.699998,32L1.5000024,32C0.50000076,30.600006 -4.9178198E-08,28.900024 0,27.100006 -4.9178198E-08,22 4.299995,17.900024 9.6999674,17.900024z M14.699976,0C18.800019,0 22.100013,3.3000183 22.100013,7.4000244 22.100013,11.5 18.800019,14.800018 14.699976,14.800018 10.599993,14.800018 7.2999998,11.5 7.2999998,7.4000244 7.3999758,3.3000183 10.699969,0 14.699976,0z" 
                />
              </g>
            </svg>
            <P size="large" color="white" weight="bold">
              {AUTHOR_LOCATION}
            </P>
          </AboutItem>
          <AboutItem>
            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
              <g>
                <path
                  transform="rotate(0,9,9) translate(0.787499785423279,0) scale(0.5625,0.5625)  " 
                  fill="#fff" 
                  d="M9.6999674,17.900024L19.500033,17.900024C24.900004,17.900024 29.2,22 29.2,27.100006 29.2,28.900024 28.7,30.600006 27.699998,32L1.5000024,32C0.50000076,30.600006 -4.9178198E-08,28.900024 0,27.100006 -4.9178198E-08,22 4.299995,17.900024 9.6999674,17.900024z M14.699976,0C18.800019,0 22.100013,3.3000183 22.100013,7.4000244 22.100013,11.5 18.800019,14.800018 14.699976,14.800018 10.599993,14.800018 7.2999998,11.5 7.2999998,7.4000244 7.3999758,3.3000183 10.699969,0 14.699976,0z" 
                />
              </g>
            </svg>
            <P size="large" color="white" weight="bold">
              {AUTHOR_GRADUATION}
            </P>
          </AboutItem>
          <AboutItem>
            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
              <g>
                <path
                  transform="rotate(0,9,9) translate(0.787499785423279,0) scale(0.5625,0.5625)  " 
                  fill="#fff" 
                  d="M9.6999674,17.900024L19.500033,17.900024C24.900004,17.900024 29.2,22 29.2,27.100006 29.2,28.900024 28.7,30.600006 27.699998,32L1.5000024,32C0.50000076,30.600006 -4.9178198E-08,28.900024 0,27.100006 -4.9178198E-08,22 4.299995,17.900024 9.6999674,17.900024z M14.699976,0C18.800019,0 22.100013,3.3000183 22.100013,7.4000244 22.100013,11.5 18.800019,14.800018 14.699976,14.800018 10.599993,14.800018 7.2999998,11.5 7.2999998,7.4000244 7.3999758,3.3000183 10.699969,0 14.699976,0z" 
                />
              </g>
            </svg>
            <P size="large" color="white" weight="bold">
              {AUTHOR_GRADUATE_FROM}
            </P>
          </AboutItem>
        </Column>
      </Row>
    </Module>
  );
};

export default About;
