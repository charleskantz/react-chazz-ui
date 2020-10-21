import styled from 'styled-components';
import { animation } from '../Animation'

/* Radio Button styling */

// To create a custom radio button, we must hide the default HTML radio button
// but ensure it still operates for accessibility
export const HiddenRadio = styled.input.attrs({ type: 'radio'})`
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

// center dot of radio button
export const RadioDot = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${props => props.theme.color.blue.base};
`;

// styled radio button, rendered as a div
export const StyledRadio = styled.div`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  background: white;
  border: 1px solid ${props => props.checked ? props.theme.color.blue.base : props.theme.color.sky.dark};
  border-radius: 8px;
  transition: all 250ms;

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.color.blue.light};
  }

  ${RadioDot} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }
  &:focus, &:hover {
    border: 1px solid ${props => props.theme.color.ink.base};
  }

  animation: ${props => props.checked ? animation : `none`};
`;

// custom label to accompany the custom radio button
export const RadioLabel = styled.label`
  ${props => props.theme.typography.bodyStyle}
  display: block;
  text-transform: none;
`;

// wrapper for set of radio button options, provides proper whitespace
export const RadioGroup = styled.div`
  margin-bottom: 15px;
`;
