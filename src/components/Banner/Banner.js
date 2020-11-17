import styled from 'styled-components';
import { vanishAnimation } from '../Animation'
import { HorizontalRule } from '../HorizontalRule';

export const StyledBanner = styled.div`
  ${p => p.theme.typography.bodyStyle}

  background: ${p => p.theme.color[p.color]?.lighter || p.theme.color.sky.light};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  animation: ${p => p.animate ? vanishAnimation : `none`};

  & ${HorizontalRule} {
    background: ${p => p.theme.color[p.color]?.dark || p.theme.color.sky.dark};
    transition: all 150ms;
    &:hover {
      background: ${p => p.theme.color[p.color]?.base || p.theme.color.sky.base};
    }
  }
`;

export const IconSpan = styled.span`
  margin-right: 8px;
  color: ${p => p.theme.color[p.color]?.base || p.theme.color.ink.base};
  margin-top: -1px;
`;

export const CloseSpan = styled.span`
  transition: all 150ms;
  margin-left: 10px;

  & > svg {
    color: ${p => p.theme.color[p.color]?.dark || p.theme.color.sky.darker};
    cursor: pointer;

    &:hover {
      color: ${p => p.theme.color[p.color]?.base || p.theme.color.sky.dark};
    }
  }
`;

export const ContentSpan = styled.div`
  width: 100%;
`;