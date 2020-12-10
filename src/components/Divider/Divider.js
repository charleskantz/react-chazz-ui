import styled from 'styled-components';

export const StyledDivider = styled.div`
  ${p => p.direction !== 'vertical'
    ? `border-top: 1px ${p.dashed ? `dashed ` : `solid `} ${p.theme.color.sky.base};`
    : `border-left: 1px ${p.dashed ? `dashed ` : `solid `} ${p.theme.color.sky.base};`
  }

  width: ${p => p.width};
  height: ${p => p.direction === 'vertical' ? `.9em` : `1px`};
  margin: ${p => p.direction === 'vertical' ? `0 0 -2px 15px` : `20px auto`};
`;

export const DividerWrapper = styled.div`
  display: ${p => p.direction === `vertical` ? `inline-block` : `flex`};
  width: ${p => p.direction === 'vertical' ? `auto` : `100%`};
  align-items: center;
`;

export const StyledText = styled.span`
  ${p => p.bodyText ? p.theme.typography.bodyStyle : p.theme.typography.headingStyle}
  ${p => !p.bodyText && `font-size: 24px;`}
  width: auto;
  padding: 0 15px;
  flex-shrink: 0;
`;