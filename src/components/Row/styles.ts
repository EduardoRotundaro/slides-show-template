import styled, { css } from "styled-components";

type PropsType = {
  horizontalAlignStart?: boolean;
  horizontalAlignEnd?: boolean;
  horizontalAlignCenter?: boolean;
  horizontalAlignBetween?: boolean;
  verticalAlignStart?: boolean;
  verticalAlignEnd?: boolean;
  verticalAlignCenter?: boolean;
};

export const RowContainer = styled.div<PropsType>`
  display: flex;
  flex-wrap: wrap;
  ${props => {
    if(props.horizontalAlignStart) 
      return css`justify-content: flex-start;`;
    if(props.horizontalAlignEnd)
      return css`justify-content: flex-end;`;
    if(props.horizontalAlignCenter)
      return css`justify-content: center;`;
    if(props.horizontalAlignBetween)
      return css`justify-content: space-between;`;
  }}
  ${props => {
    if(props.verticalAlignStart)
      return css`align-items: flex-start;`;
    if(props.verticalAlignEnd)
      return css`align-items: flex-end;`;
    if(props.verticalAlignCenter)
      return css`align-items: center;`;
  }}
`;
