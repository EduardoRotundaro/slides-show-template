import styled from "styled-components";

export const Module = styled.div`
  .profile {
    z-index: 0;
  }

  .about {
    padding-top: 50px;
  }
`;

export const Profile = styled.div`
  margin: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  box-shadow:0 2px 10px rgba(0,0,0,.2);
 
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    width: 300px;
    height: 300px;

    img {
      width: 280px;
      height: 280px;
    }
  }
`;

export const AboutItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;

  svg {
    margin-right: 10px;
  }
`;
