import styled from 'styled-components';

export const StyledButton = styled.button`
  ${props => props.theme.typography.labelStyle}
  ${props => props.fullWidth && "width: 100%;"}
  display: block;
  padding: 0 22px;
  height: ${props => props.slim ? `36px` : `44px`};
  background: ${props => props.color
    ? props.theme.color[props.color].base : props.theme.color.indigo.base};
  border-radius: 22px;
  color: white;
  border: none;
  margin: ${props => props.right
    ? "0 0 0 auto" : props.left ? "0 auto 0 0" : "none"};
  cursor: pointer;
  transition: all 150ms;

  &:hover {
    background: ${props => props.color
      ? props.theme.color[props.color].dark : props.theme.color.indigo.dark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.color.blue.light};
  }
`;