import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  margin: 20px;

  @media (min-width: 480px) {
    width: 600px;
  }
`;

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

export const HorizontalRule = styled.div`
  background: ${props => props.theme.color.sky.dark};
  width: 80%;
  height: 1px;
  margin: 80px auto;

  @media (min-width: 480px) {
    width: 450px;
  }
`;