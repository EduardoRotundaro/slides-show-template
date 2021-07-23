import { FC } from 'react';

type PropsType = {
  url: string,
};

import { Container } from './styles';

const ProfileImage: FC<PropsType> = function (props) {
  const {
    url,
  } = props;

  return (
    <Container>
      <img src={url} alt="" />
    </Container>
  );
};

export default ProfileImage;
