import styled from 'styled-components';
import { animation } from '../Animation'

export const StyledButton = styled.button`
  ${p => p.theme.typography.labelStyle}
  height: ${p => p.size === 'small' ? `24px` : p.size === 'large' ? `44px` : `36px`};
  width: ${p => p.width};
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${p => `1px ${p.borderType} ${p.theme.color[p.borderColor].base}`};
  border-radius: ${p => p.shape === 'round' ? `4px` : p.shape === 'square' ? `none` : `22px`};
  padding: ${p => p.size === 'small' ? `0 12px` : `0 22px`};
  background: ${p => p.color === 'ink'
    ? 'white' : p.theme.color[p.color].base};
  color: ${p => p.color === 'ink' ? p.theme.color.ink.base : `white`};
  margin: ${p => p.align === 'right'
    ? "0 0 0 auto" : p.align === 'center' ? "0 auto" : "none"};
  cursor: pointer;
  outline: none;
  transition: all 150ms ease-out;
  animation: ${p => p.clickAnim ? animation : `none`};

  &:hover {
    ${p => p.color === 'ink'
      ? `
        color: ${!p.disabled && p.theme.color.blue.base};
        border: 1px ${p.borderType} ${!p.disabled && p.theme.color.blue.base};
      ` : `
        background: ${!p.disabled && p.theme.color[p.color].dark};`
    }

    &:focus {
      box-shadow: 0 0 0 3px ${p => p.theme.color.blue.light};
    }
  }

  ${p => p.transparent && `
    background: transparent;
    border: 1px ${p.borderType} ${p.theme.color[p.color].base};
    color: ${p.theme.color[p.color].base};
    &:hover {
      background: transparent;
      border: 1px ${p.borderType} ${!p.disabled && p.theme.color[p.color].dark};
      color: ${p.theme.color[p.color].dark};
    }
  `}

  ${p => p.disabled && `
    background: ${p.theme.color.sky.light};
    border: 1px ${p.borderType} ${p.theme.color.sky.base};
    color: ${p.theme.color.sky.base};
    &:hover {
      background: ${p.theme.color.sky.base};
      color: ${p.theme.color.sky.light};
      cursor: not-allowed;
    }
  `}

  ${p => p.loading && `
    background: ${p.transparent
      ? 'transparent'
      : ['default', 'dashed'].includes(p.type)
        ? 'white'
        : p.theme.color[p.color].light};
    color: ${[ 'default', 'dashed' ].includes(p.type) || p.transparent
      ? p.theme.color.sky.dark : 'white'};
    cursor: wait;
    &:hover {
      background: ${p.theme.color[p.color].light};
    }
  `}
`;