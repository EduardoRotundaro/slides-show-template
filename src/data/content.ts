import { ContentsType } from './types';

const TITLE = 'Mussum Ipsum';

const LINE = 'Mussum Ipsum, cacilds vidis litro abertis.';

const PARAGRAPH = 'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.';

export const CONTENTS: ContentsType = [
  {
    type: 'cover',
    background: '1',
    heading: '',
    paragraphs: [],
  },
  {
    type: 'about',
    background: 'black',
    heading: TITLE,
    paragraphs: [LINE],
  },
  {
    type: 'summary',
    background: '3',
    heading: TITLE,
    paragraphs: [PARAGRAPH],
  },
];
