import { FC } from 'react';

type PropsType = {
  itens: Array<string>,
};

import { UList } from './styles';

const List: FC<PropsType> = function (props) {
  const {
    itens,
  } = props;

  return (
    <UList>
      {itens.map((item, index) => (
        <li key={`item_${index}`}>
        </li>
      ))}
    </UList>
  );
};

export default List;
