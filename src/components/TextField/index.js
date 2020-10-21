import styled from 'styled-components';

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