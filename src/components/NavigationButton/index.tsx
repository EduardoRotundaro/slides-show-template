import { FC, ReactNode } from 'react';

type PropsType = {
  children?: ReactNode,
};

import { Button } from './styles';

const NavigationButton: FC<PropsType> = function (props) {
  const {
    children,
  } = props;

  return (
    <Button type="button">
      {children}
    </Button>
  );
};

export default NavigationButton;
