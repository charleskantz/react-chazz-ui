import styled from 'styled-components';
import { TextField } from '../TextField';

/* Range Slider */

export const RangeSlider = styled(TextField).attrs({ type: 'range' })`
  -webkit-appearance: none;
  background: transparent;
  margin: 10px 0 15px;
  height: 8px;
  border-radius: 4px;
  transition: all 150ms;
  padding: 0 6px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.color.blue.light};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid white;
    height: 18px;
    width: 18px;
    border-radius: 9px;
    background: ${props => props.theme.color.blue.base};
    cursor: pointer;
    margin-top: 0;
  }
`;