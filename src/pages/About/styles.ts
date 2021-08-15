import styled from "styled-components";

type PropsType = {
};

export const Module = styled.div<PropsType>`
  .profile {
    z-index: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  .card {
    position: relative;
    width: 300px;
    height: 300px;
    background: #fff;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow:0 2px 10px rgba(0,0,0,.2);

    &:before,
    &:after {
      content:"";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: #fff;
      transition: 0.5s;
      z-index: -1;
    }

    &:hover {
      &:before{
        transform: rotate(20deg);
        box-shadow: 0 2px 20px rgba(0,0,0,.2);
      }
      &:after{
        transform: rotate(10deg);
        box-shadow: 0 2px 20px rgba(0,0,0,.2);
      }
      .image {
        bottom: 80px;
      }
    }

    .image {
      position: absolute;
      top: 10px;
      left: 10px;
      bottom: 10px;
      right: 10px;
      background: #222;
      transition: 0.5s;
      z-index: 1;

      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .name {
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 10px;
      height: 60px;
      text-align: center;

      h2 {
        margin: 0;
        padding: 0;
        font-weight: 600;
        font-size: 20px;
        color: #777;
        text-transform: uppercase;

        span{
          font-weight: 500;
          font-size: 16px;
          color: ${props => props.theme.colors.theme1};
          display: block;
          margin-top: 5px;
        }
      }
    }
  }
 
  @media (min-width: ${props => props.theme.breakpoints.large}) {
  }
`;
