import styled from "styled-components";

type PropsType = {
  background: '1' | '2' | '3' | '4' | '5' | 'black' | 'white',
};

export const Container = styled.section<PropsType>`
  background: ${props => {
    if (props.background === '1') return props.theme.colors.theme1;
    if (props.background === '2') return props.theme.colors.theme2;
    if (props.background === '3') return props.theme.colors.theme3;
    if (props.background === '4') return props.theme.colors.theme4;
    if (props.background === '5') return props.theme.colors.theme5;
    if (props.background === 'black') return props.theme.colors.black;
    return props.theme.colors.white;
  }};
`;
