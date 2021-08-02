import styled from "styled-components";

type PropsType = {
};

export const Cont = styled.div<PropsType>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${props => props.theme.breakpoints.small}) {
    max-width: 540px;
  }
  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    max-width: 720px;
  }
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    max-width: 960px;
  }
  @media (min-width: ${props => props.theme.breakpoints.extraLarge}) {
    max-width: 1140px;
  }
`;
