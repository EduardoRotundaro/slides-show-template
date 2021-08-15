import styled from "styled-components";

import { ElementPropsType } from './types';

export const Paragraph = styled.p<ElementPropsType>`
  font-family: ${props => {
    if (props.font === 'primary') return props.theme.fonts.secondary;
    return props.theme.fonts.secondary;
  }};
  color: ${props => {
    if (props.color === 'white') return props.theme.colors.white;
    return props.theme.colors.black;
  }};
  font-weight: ${props => {
    if (props.weight === 'lighter') return 400;
    if (props.weight === 'bold') return 600;
    if (props.weight === 'bolder') return 700;
    if (props.weight === 'heavy') return 800;
    return 500;
  }};
  text-align: ${props => {
    if (props.align === 'justify') return 'justify';
    if (props.align === 'left') return 'left';
    if (props.align === 'right') return 'right';
    return 'center';
  }};

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    font-size: ${props => {
      if (props.size === 'small') return '1.6rem';
      if (props.size === 'large') return '2.2rem';
      if (props.size === 'extra-large') return '2.6rem';
      return '1.9rem';
    }};
  }
`;
