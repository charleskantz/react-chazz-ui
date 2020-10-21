import styled from 'styled-components';
import { TextField } from '../TextField';

/* Select */

export const Select = styled(TextField.withComponent('select'))`
  appearance: none;
  overflow-y: auto;
  ${props => props.multiple && `
    height: auto;
    padding: 0;
    & > option {
      padding: 10px 10px;
    }
  `}
`;

export const SelectWrapper = styled.div`
  position: relative;

  &::after {
    font-size: 26px;
    font-weight: normal;
    content: "↓";
    top: 18px;
    right: 10px;
    position: absolute;
  }
  &:hover::after {
    color: ${props => props.theme.color.blue.base};
    pointer-events: none;
  }
  ${props => props.multiple && `
    &::after {
      content: "";
    }
  `}
`;