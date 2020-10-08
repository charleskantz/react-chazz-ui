import styled from 'styled-components';

export const Card = styled.div`
  width: 450px;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  margin: 20px;
`;

export const ContentDiv = styled.div`
  padding: 40px;
`;

export const ColorPanel = styled.div`
  ${props => props.theme.typography.headingStyle}
  color: white;
  text-align: center;
  background: linear-gradient(
    180deg,
    ${props => props.theme.color.teal.base} 0%,
    ${props => props.theme.color.blue.base} 100%
  );
  padding: 60px 40px;
  top: 0;
  left: 0;
  right: 0;
`;