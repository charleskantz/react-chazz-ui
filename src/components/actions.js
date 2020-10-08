import styled from 'styled-components';

export const Button = styled.button`
  ${props => props.theme.typography.labelStyle}
  ${props => props.fullWidth && "width: 100%;"}
  display: block;
  padding: 0 22px;
  height: 44px;
  background: ${props => props.color
    ? props.theme.color[props.color].base : props.theme.color.indigo.base};
  border-radius: 22px;
  color: white;
  border: none;
  margin: ${props => props.right
    ? "0 0 0 auto" : props.left ? "0 auto 0 0" : "none"};
  cursor: pointer;

  &:hover {
    background: ${props => props.color
      ? props.theme.color[props.color].dark : props.theme.color.indigo.dark};
  }
`;