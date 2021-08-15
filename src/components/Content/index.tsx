import { ComponentType } from './types';
import { ContentContainer, Block } from './styles';

const Content: ComponentType = function (props) {
  const { children } = props;

  return (
    <ContentContainer>
      <Block className="popIn duration-500">
        {children}
      </Block>
    </ContentContainer>
  )
};

export default Content;
