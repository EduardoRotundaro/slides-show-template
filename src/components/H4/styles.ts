import styled from "styled-components";

import { ElementPropsType } from './types';

export const Heading4 = styled.h4<ElementPropsType>`
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
    font-size: 4.5rem;
  }
`;
