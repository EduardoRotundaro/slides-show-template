import { FC } from 'react';

import { ContentType } from './data/types';

import About from './modules/About';
import Attachments from './modules/Attachments';
import Chapter from './modules/Chapter';
import Cover from './modules/Cover';
import Media from './modules/Media';
import PlainText from './modules/PlainText';
import References from './modules/References';
import Summary from './modules/Summary';
import Thanks from './modules/Thanks';

type PropsType = {
  content: ContentType,
};

const Page: FC<PropsType> = function (props) {
  const { content } = props;
  return (
    <>
      {content.type === 'about' && <About content={content} />}
      {content.type === 'attachment' && <Attachments content={content} />}
      {content.type === 'chapter' && <Chapter content={content} />}
      {content.type === 'cover' && <Cover content={content} />}
      {content.type === 'media' && <Media content={content} />}
      {content.type === 'plainText' && <PlainText content={content} />}
      {content.type === 'references' && <References content={content} />}
      {content.type === 'summary' && <Summary content={content} />}
      {content.type === 'thanks' && <Thanks content={content} />}
    </>
  );
};

export default Page;
