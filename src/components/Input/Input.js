import styled from 'styled-components';

/* Base styles for text inputs */

export const StyledInput = styled.input`
  ${props => props.theme.typography.bodyStyle}
  box-sizing: border-box;
  transition: all 150ms;
  border: none;
  background: transparent;
  width: 100%;
  height: ${props => props.size === 'lg'
    ? `44px` : props.size === 'md'
      ? `36px` : `28px`};

  &::placeholder {
    color: ${props => props.theme.color.sky.dark};
  }
  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.color.sky.dark};
  border-radius: 4px;
  color: ${props => props.theme.color.ink.base};
  margin: 5px 0 15px;
  padding: 0 10px;
  width: 100%;
  height: ${props => props.size === 'lg'
    ? `44px` : props.size === 'md'
      ? `36px` : `28px`};
  ${props => props.error && `
    border: 1px solid ${props.theme.color.red.base};
    background: ${props.theme.color.red.lighter};
  `}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.color.blue.light};
  }

  &:focus, &:hover {
    border: 1px solid ${props => props.theme.color.blue.base};
  }
`;