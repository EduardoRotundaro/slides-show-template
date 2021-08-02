import styled, { css } from "styled-components";

type PropsType = {
  common?: string,
  lg?: string,
};

export const Col = styled.div<PropsType>`
  position: relative;
  width: 100%;
  flex: 0 0 ${props => props.common || '100%'};
  max-width: ${props => props.common || '100%'};
  ${props => {
    if(props.lg) return css`
      @media (min-width: ${props.theme.breakpoints.large}) {
        flex: 0 0 ${props.lg};
        max-width: ${props.lg};
      }
    `;
  }};
`;
