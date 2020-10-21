import styled from 'styled-components';
import { TextField } from '../TextField';

export const TextArea = styled(TextField.withComponent('textarea'))`
  padding: 8px 10px;
  height: 80px;
  resize: vertical;
  transition: all 150ms;
`;