import styled from 'styled-components';
import { sharedHeadingStyle } from './typography';

export const Card = styled.div`
  width: 350px;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
  margin: 40px;
`;

export const ContentDiv = styled.div`
  padding: 40px;
`;

export const ColorPanel = styled.div`
  ${sharedHeadingStyle}
  color: white;
  text-align: center;
  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
  padding: 60px 40px;
  top: 0;
  left: 0;
  right: 0;
`;