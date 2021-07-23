import { FC } from 'react';

type PropsType = {
  url: string,
  alt: string,
};

import { Container } from './styles';

const ImageContainer: FC<PropsType> = function (props) {
  const {
    url,
    alt,
  } = props;

  return (
    <Container>
      <img src={url} alt={alt} />
    </Container>
  );
};

export default ImageContainer;
