import styled from 'styled-components';
import { vanishAnimation } from '../Animation'
import { HorizontalRule } from '../HorizontalRule';

export const StyledBanner = styled.div`
  ${props => props.theme.typography.bodyStyle}

  background: ${props => props.theme.color[props.color]?.lighter || props.theme.color.sky.light};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation: ${props => props.animate ? vanishAnimation : `none`};

  & ${HorizontalRule} {
    background: ${props => props.theme.color[props.color]?.dark || props.theme.color.sky.dark};
    transition: all 150ms;
    &:hover {
      background: ${props => props.theme.color[props.color]?.base || props.theme.color.sky.base};
    }
  }
`;