import { ContentsType } from './types';

const TITLE = 'Mussum Ipsum';

// const LINE = 'Mussum Ipsum, cacilds vidis litro abertis.';

// const PARAGRAPH = 'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.';

export const CONTENTS: ContentsType = [
  {
    type: 'cover',
    background: '1',
  },
  {
    type: 'author',
    background: 'black',
  },
  {
    type: 'about',
    background: 'black',
  },
  {
    type: 'summary',
    background: '5',
    heading: 'Conteúdo',
  },
  {
    type: 'chapter',
    background: '1',
  },
  {
    type: 'plainText',
    background: '4',
  },
  {
    type: 'plainText',
    background: '2',
  },
  {
    type: 'chapter',
    background: '3',
  },
  {
    type: 'plainText',
    background: '5',
  },
  {
    type: 'plainText',
    background: '1',
  },
  {
    type: 'attachment',
    background: '4',
  },
  {
    type: 'media',
    background: '2',
  },
  {
    type: 'references',
    background: '3',
  },
  {
    type: 'thanks',
    background: '5',
  },
];
