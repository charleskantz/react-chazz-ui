import styled from 'styled-components';


export const ContentDiv = styled.div`
  padding: 30px;

  @media (min-width: 480px) {
    padding: 40px;
  }
`;

export const ColorPanel = styled.div`
  ${props => props.theme.typography.headingStyle}
  color: white;
  text-align: center;
  background: ${props => props.color
    ? props.theme.color[props.color].base
    : `linear-gradient(
      180deg,
      ${props.theme.color.teal.base} 0%,
      ${props.theme.color.blue.base} 100%)
  `};
  padding: 60px 40px;
`;