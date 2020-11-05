import styled from 'styled-components';

export const StyledButton = styled.button`
  ${props => props.theme.typography.labelStyle}
  height: ${props => props.size === 'small' ? `24px` : props.size === 'large' ? `44px` : `36px`};
  ${props => props.block && "width: 100%;"}
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${props => `1px ${props.borderType} ${props.theme.color[props.borderColor].base}`};
  border-radius: ${props => props.shape === 'rounded' ? `4px` : props.shape === 'square' ? `none` : `22px`};
  padding: 0 22px;
  background: ${props => props.color === 'ink'
    ? 'white' : props.theme.color[props.color].base};
  color: ${props => props.color === 'ink' ? props.theme.color.ink.base : `white`};
  margin: ${props => props.right
    ? "0 0 0 auto" : props.left ? "0 auto 0 0" : "none"};
  cursor: pointer;
  outline: none;
  transition: all 150ms ease-out;

  &:hover {
    ${props => props.color === 'ink'
      ? `
        color: ${props.theme.color.blue.base};
        border: 1px ${props.borderType} ${props.theme.color.blue.base};
      ` : `
        background: ${props.theme.color[props.color].dark};`
    }

    &:focus {

      box-shadow: 0 0 0 3px ${props => props.theme.color.blue.light};
    }
  }

  ${props => props.transparent && `
    background: transparent;
    border: 1px ${props.borderType} ${props.theme.color[props.color].base};
    color: ${props.theme.color[props.color].base};
    &:hover {
      background: transparent;
      border: 1px ${props.borderType} ${props.theme.color[props.color].dark};
      color: ${props.theme.color[props.color].dark};
    }
  `}


  ${props => props.disabled && `
    background: ${props.theme.color.sky.light};
    border: 1px ${props.borderType} ${props.theme.color.sky.base};
    color: ${props.theme.color.sky.base};
    &:hover {
      background: ${props.theme.color.sky.light};
      cursor: not-allowed;
    }
  `}
  ${props => props.loading && `
    background: ${props.theme.color[props.color].light};
    color: white;
    cursor: wait;
    &:hover {
      background: ${props.theme.color[props.color].light};
    }
  `}
`;