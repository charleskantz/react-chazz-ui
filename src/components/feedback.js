import styled from 'styled-components';

export const Badge = styled.span`
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  background: ${props => props.color
    ? props.theme.color[props.color]?.light : props.theme.color.sky.light};
  padding: 2px 10px;
  margin: 0 2px;
  border: 2px solid white;
  border-radius: 100px;
`;