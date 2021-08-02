import { FC, ReactNode } from 'react';

import { RowContainer } from './styles';

type PropsType = {
  children?: ReactNode;
  horizontalAlignStart?: boolean;
  horizontalAlignEnd?: boolean;
  horizontalAlignCenter?: boolean;
  horizontalAlignBetween?: boolean;
  verticalAlignStart?: boolean;
  verticalAlignEnd?: boolean;
  verticalAlignCenter?: boolean;
  className?: string;
};

const Row: FC<PropsType> = function (props) {
  const {
    children,
    className,
    horizontalAlignBetween,
    horizontalAlignCenter,
    horizontalAlignEnd,
    horizontalAlignStart,
    verticalAlignCenter,
    verticalAlignEnd,
    verticalAlignStart,
  } = props;

  return (
    <RowContainer 
      className={className || ''}
      horizontalAlignStart={horizontalAlignStart}
      horizontalAlignEnd={horizontalAlignEnd}
      horizontalAlignCenter={horizontalAlignCenter}
      horizontalAlignBetween={horizontalAlignBetween}
      verticalAlignStart={verticalAlignStart}
      verticalAlignEnd={verticalAlignEnd}
      verticalAlignCenter={verticalAlignCenter}
    >
      {children}
    </RowContainer>
  );
};

export default Row;
