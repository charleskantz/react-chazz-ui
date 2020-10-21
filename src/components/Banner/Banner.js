import styled from 'styled-components';
import { vanishAnimation } from '../Animation'

export const StyledBanner = styled.div`
  ${props => props.theme.typography.bodyStyle}

  background: ${props => props.theme.color[props.color]?.lighter || props.theme.color.sky.light};
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation: ${props => props.animate ? vanishAnimation : `none`};
`;