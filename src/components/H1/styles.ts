import styled from "styled-components";

type ColorTypes = 'black' | 'white';

type AlignTypes = 'center' | 'left' | 'right' | 'justify';

type WeightTypes = 'lighter' | 'regular' | 'bold' | 'bolder' | 'heavy';

type FontTypes = 'primary' | 'secondary';

type PropsType = {
  color?: ColorTypes,
  align?: AlignTypes,
  weight?: WeightTypes,
  font?: FontTypes,
};

export const Heading1 = styled.h1<PropsType>`
  font-family: ${props => {
    if (props.font === 'secondary') return props.theme.fonts.secondary;
    return props.theme.fonts.primary;
  }};
  color: ${props => {
    if (props.color === 'white') return props.theme.colors.white;
    return props.theme.colors.black;
  }};
  font-weight: ${props => {
    if (props.weight === 'lighter') return 400;
    if (props.weight === 'regular') return 500;
    if (props.weight === 'bolder') return 700;
    if (props.weight === 'heavy') return 800;
    return 600;
  }};
  text-align: ${props => {
    if (props.align === 'justify') return 'justify';
    if (props.align === 'left') return 'left';
    if (props.align === 'right') return 'right';
    return 'center';
  }};
  
  @media (min-width: ${props => props.theme.breakpoints.large}) {
    font-size: 6rem;
  }
`;
