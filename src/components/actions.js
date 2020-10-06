import styled from 'styled-components';
import { sharedLabelStyle } from './typography';
import { indigoColor } from './color';

export const Button = styled.button`
  ${sharedLabelStyle}
  display: inline-block;
  padding: 0 22px;
  height: 44px;
  background: ${indigoColor.base};
  border-radius: 22px;
  color: white;
  border: none;
`;