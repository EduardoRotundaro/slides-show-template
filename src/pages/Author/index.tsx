import { FC } from 'react';

import { ContentType } from '../../data/types';
import { 
  AUTHOR,
  AUTHOR_EMAIL,
  AUTHOR_GITHUB,
  AUTHOR_INSTAGRAM,
  AUTHOR_LINKEDIN,
} from '../../data/metadata';

import profilePhoto from '../../assets/images/profile.jpg';

import { 
  Module,
  Profile,
  Contact,
  ContactItem,
} from './styles';
import Row from '../../components/Row';
import Column from '../../components/Column';

type PropsType = {
  content: ContentType,
};

const About: FC<PropsType> = function (props) {
  return (
    <Module className="popIn duration-600">
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
      <Row className="contact">
        <Column>
          <Contact>
            <ContactItem linkedin href={AUTHOR_LINKEDIN} aria-label="Contato pelo Linkedin" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                <g>
                  <path
                    transform="rotate(0,9,9) translate(0.787499785423279,0) scale(0.5625,0.5625)  " 
                    fill="#fff" 
                    d="M9.6999674,17.900024L19.500033,17.900024C24.900004,17.900024 29.2,22 29.2,27.100006 29.2,28.900024 28.7,30.600006 27.699998,32L1.5000024,32C0.50000076,30.600006 -4.9178198E-08,28.900024 0,27.100006 -4.9178198E-08,22 4.299995,17.900024 9.6999674,17.900024z M14.699976,0C18.800019,0 22.100013,3.3000183 22.100013,7.4000244 22.100013,11.5 18.800019,14.800018 14.699976,14.800018 10.599993,14.800018 7.2999998,11.5 7.2999998,7.4000244 7.3999758,3.3000183 10.699969,0 14.699976,0z" 
                  />
                </g>
              </svg>
            </ContactItem>
            <ContactItem instagram href={AUTHOR_INSTAGRAM} aria-label="Contato pelo Instagram" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                <g>
                  <path
                    transform="rotate(0,9,9) translate(0.787499785423279,0) scale(0.5625,0.5625)  " 
                    fill="#fff" 
                    d="M9.6999674,17.900024L19.500033,17.900024C24.900004,17.900024 29.2,22 29.2,27.100006 29.2,28.900024 28.7,30.600006 27.699998,32L1.5000024,32C0.50000076,30.600006 -4.9178198E-08,28.900024 0,27.100006 -4.9178198E-08,22 4.299995,17.900024 9.6999674,17.900024z M14.699976,0C18.800019,0 22.100013,3.3000183 22.100013,7.4000244 22.100013,11.5 18.800019,14.800018 14.699976,14.800018 10.599993,14.800018 7.2999998,11.5 7.2999998,7.4000244 7.3999758,3.3000183 10.699969,0 14.699976,0z" 
                  />
                </g>
              </svg>
            </ContactItem>
            <ContactItem github href={AUTHOR_GITHUB} aria-label="Contato pelo Github" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                <g>
                  <path
                    transform="rotate(0,9,9) translate(0.787499785423279,0) scale(0.5625,0.5625)  " 
                    fill="#fff" 
                    d="M9.6999674,17.900024L19.500033,17.900024C24.900004,17.900024 29.2,22 29.2,27.100006 29.2,28.900024 28.7,30.600006 27.699998,32L1.5000024,32C0.50000076,30.600006 -4.9178198E-08,28.900024 0,27.100006 -4.9178198E-08,22 4.299995,17.900024 9.6999674,17.900024z M14.699976,0C18.800019,0 22.100013,3.3000183 22.100013,7.4000244 22.100013,11.5 18.800019,14.800018 14.699976,14.800018 10.599993,14.800018 7.2999998,11.5 7.2999998,7.4000244 7.3999758,3.3000183 10.699969,0 14.699976,0z" 
                  />
                </g>
              </svg>
            </ContactItem>
            <ContactItem gmail href={AUTHOR_EMAIL} aria-label="Contato pelo e-mail" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 18 18">
                <g>
                  <path
                    transform="rotate(0,9,9) translate(0.787499785423279,0) scale(0.5625,0.5625)  " 
                    fill="#fff" 
                    d="M9.6999674,17.900024L19.500033,17.900024C24.900004,17.900024 29.2,22 29.2,27.100006 29.2,28.900024 28.7,30.600006 27.699998,32L1.5000024,32C0.50000076,30.600006 -4.9178198E-08,28.900024 0,27.100006 -4.9178198E-08,22 4.299995,17.900024 9.6999674,17.900024z M14.699976,0C18.800019,0 22.100013,3.3000183 22.100013,7.4000244 22.100013,11.5 18.800019,14.800018 14.699976,14.800018 10.599993,14.800018 7.2999998,11.5 7.2999998,7.4000244 7.3999758,3.3000183 10.699969,0 14.699976,0z" 
                  />
                </g>
              </svg>
            </ContactItem>
          </Contact>
        </Column>
      </Row>
    </Module>
  );
};

export default About;
