import styled from 'styled-components';
import { animation } from '../Animation'

/* Checkbox styling */

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
  padding-bottom: .75px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? props.theme.color.blue.base : 'white'};
  border: 1px solid ${props => props.checked ? props.theme.color.blue.base : props.theme.color.sky.dark};
  border-radius: 4px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.color.blue.light};
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }

  &:focus, &:hover {
    border: 1px solid ${props => props.theme.color.blue.base};
  }

  animation: ${props => props.checked ? animation : `none`};
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: sub;
  margin-right: 5px;
`;

export const CheckboxLabel = styled.label`
  ${props => props.theme.typography.bodyStyle}
  display: inline-block;
  margin-bottom: 15px;
`;
