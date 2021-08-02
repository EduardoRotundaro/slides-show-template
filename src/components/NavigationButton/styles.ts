import styled, { css } from "styled-components";

type PropsType = {
  left?: boolean,
  right?: boolean,
};

export const Container = styled.div<PropsType>`
  position: absolute;
  top: 45%;
  ${props => {
    if (props.left) return css`left: 20px;`;
    else return css`right: 20px;`;
  }}
  &>div{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    & div {
      position: absolute;
      top: 0;
      font-size: 14px;
      background: ${props => props.theme.colors.black};
      color: ${props => props.theme.colors.white};
      padding: 5px 8px;
      border-radius: 5px;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

      &::before {
        position: absolute;
        content: "";
        height: 8px;
        width: 8px;
        background-color: ${props => props.theme.colors.black};
        bottom: -3px;
        left: 50%;
        transform: translate(-50%) rotate(45deg);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }

    &:hover div {
      top: -45px;
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  cursor: pointer;
`;
