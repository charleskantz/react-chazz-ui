import styled from 'styled-components';

export const CloseSpan = styled.span`
  cursor: pointer;
  color: ${props => props.theme.color[props.color]?.dark || props.theme.color.sky.darker};
  transition: all 150ms;
  margin-left: 10px;

  &:hover {
    color: ${props => props.theme.color[props.color]?.base || props.theme.color.sky.dark};
  }
`;

export const ContentSpan = styled.div`
  width: 100%;
`;