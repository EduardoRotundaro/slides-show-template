import { ComponentType } from './types';
import { ContentContainer, Block } from './styles';

const Content: ComponentType = function (props) {
  const { children } = props;

  return (
    <ContentContainer>
      <Block>
        {children}
      </Block>
    </ContentContainer>
  )
};

export default Content;
