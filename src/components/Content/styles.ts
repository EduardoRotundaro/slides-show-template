import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
`;

export const Block = styled.div`
  padding: 50px 0px;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    padding: 100px 0px;
  }
`;
