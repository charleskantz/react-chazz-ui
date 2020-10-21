import styled from 'styled-components';
import { Label } from '../Label';

export const InputHelp = styled.div`
  ${props => props.theme.typography.captionStyle}

  ${Label} + & {
    margin: -8px 0 15px;
  }

  ${props => props.error && `
    color: ${props.theme.color.red.base};
    &::before {
      content: 'xxx ';
    }
  `}
`;