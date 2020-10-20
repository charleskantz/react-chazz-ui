import styled, { keyframes, css } from 'styled-components';
import { ErrorOutline } from '@styled-icons/material-outlined';

/* Selection animation */

const selectAnim = keyframes`
  0% {
    box-shadow: 0 0 0 0 white
  }
  50% {
    box-shadow: 0 0 0 2px #006FBB
  }
  100% {
    box-shadow: 0 0 0 4px white
  }
`;

const animationLength = `.15s`;

const animation = css`
  ${selectAnim} ${animationLength} linear;
`;

/* Base styles for text inputs */

export const TextField = styled.input`
  ${props => props.theme.typography.bodyStyle}
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.color.sky.dark};
  border-radius: 4px;
  color: ${props => props.theme.color.ink.base};
  margin: 5px 0 15px;
  padding: 0 10px;
  width: 100%;
  height: 44px;
  transition: all 150ms;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.color.blue.light};
  }

  &::placeholder {
    color: ${props => props.theme.color.sky.dark};
  }

  &:focus, &:hover {
    border: 1px solid ${props => props.theme.color.ink.base};
  }

  ${props => props.error && `
    border: 1px solid ${props.theme.color.red.base};
    background: ${props.theme.color.red.lighter};
  `}
`;

export const TextArea = styled(TextField.withComponent('textarea'))`
  padding: 8px 10px;
  height: 80px;
  resize: vertical;
  transition: all 150ms;
`;

export const InputLabel = styled.label`
  ${props => props.theme.typography.labelStyle}
  display: block;
`;

export const InputHelpText = styled.div`
  ${props => props.theme.typography.captionStyle}

  ${InputLabel} + & {
    margin: -8px 0 15px;
  }

  ${props => props.error && `
    color: ${props.theme.color.red.base};
    &::before {
      content: '${ErrorOutline}';
    }
  `}
`;

export const Form = styled.form`
margin-bottom: 20px;
`;

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

/* Radio Button styling */

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

export const RadioDot = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${props => props.theme.color.blue.base};
`;

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

export const RadioLabel = styled.label`
  ${props => props.theme.typography.bodyStyle}
  display: block;
  text-transform: none;
`;

export const RadioGroup = styled.div`
  margin-bottom: 15px;
`;

/* Select */

export const Select = styled(TextField.withComponent('select'))`
  appearance: none;
  overflow-y: auto;
  ${props => props.multiple && `
    height: auto;
    padding: 0;
    & > option {
      padding: 10px 10px;
    }
  `}
`;

export const SelectWrapper = styled.div`
  position: relative;

  &::after {
    font-size: 26px;
    font-weight: normal;
    content: "↓";
    top: 18px;
    right: 10px;
    position: absolute;
  }
  &:hover::after {
    color: ${props => props.theme.color.blue.base};
    pointer-events: none;
  }
  ${props => props.multiple && `
    &::after {
      content: "";
    }
  `}
`;

/* Range Slider */

export const Range = styled(TextField).attrs({ type: 'range' })`
  -webkit-appearance: none;
  background: transparent;
  margin: 10px 0 15px;
  height: 8px;
  border-radius: 4px;
  transition: all 150ms;
  padding: 0 6px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.color.blue.light};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid white;
    height: 18px;
    width: 18px;
    border-radius: 9px;
    background: ${props => props.theme.color.blue.base};
    cursor: pointer;
    margin-top: 0;
  }
`;