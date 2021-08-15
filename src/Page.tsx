import { FC } from 'react';

import { ContentType } from './data/types';

import Section from './components/Section';
import Container from './components/Container';
import Content from './components/Content';
import About from './pages/About';
import Author from './pages/Author';
import Attachments from './pages/Attachments';
import Chapter from './pages/Chapter';
import Cover from './pages/Cover';
import Media from './pages/Media';
import PlainText from './pages/PlainText';
import References from './pages/References';
import Summary from './pages/Summary';
import Thanks from './pages/Thanks';

type PropsType = {
  content: ContentType,
};

const Page: FC<PropsType> = function (props) {
  const { content } = props;
  return (
    <Section background={content.background}>
      <Container>
        <Content>
          {content.type === 'about' && <About content={content} />}
          {content.type === 'author' && <Author content={content} />}
          {content.type === 'attachment' && <Attachments content={content} />}
          {content.type === 'chapter' && <Chapter content={content} />}
          {content.type === 'cover' && <Cover content={content} />}
          {content.type === 'media' && <Media content={content} />}
          {content.type === 'plainText' && <PlainText content={content} />}
          {content.type === 'references' && <References content={content} />}
          {content.type === 'summary' && <Summary content={content} />}
          {content.type === 'thanks' && <Thanks content={content} />}
        </Content>
      </Container>
    </Section>
  );
};

export default Page;
