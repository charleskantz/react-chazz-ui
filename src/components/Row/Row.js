import styled from 'styled-components';
import { StyledCol } from '../Col/Col';

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
  justify-content: ${props => props.justify ? props.justify : `start`};
  align-items: ${props => props.align ? props.align : `start`};

  & > ${StyledCol} {
    ${props =>
      `padding: ${props.yGutter} ${props.xGutter};`
    }
  }
`;