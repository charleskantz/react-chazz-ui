import React from 'react';
import { StyledCol } from './Col';
import { chazzTheme } from 'react-chazz-ui';
import { colToPercent } from '../../utils/colToPercent';

export function Col({ flex, offset, order, span, children, ...props }) {

  const breakpoints = [ 'sm', 'md', 'lg', 'xl' ];

  const parseSpan = spanVal => {
    if (spanVal) {
      if (spanVal > chazzTheme.grid.columns || spanVal < 1) {
        throw Error(`Span value must be an integer between 1 and ${chazzTheme.grid.columns}.`);
      }
    } else {
      spanVal = 12;
    }
    return colToPercent(spanVal);
  }

  const parseOffset = offsetVal => {
    if (offsetVal) {
      if (offsetVal > chazzTheme.grid.columns || offsetVal < 1) {
        throw Error(`Offset value must be an integer between 1 and ${chazzTheme.grid.columns}.`);
      }
    } else {
      offsetVal = 0;
    }
    return colToPercent(offsetVal);
  }

  // process provided breakpoints and pass to component as prop
  breakpoints.forEach(breakpoint => {
    const brkPoint = props[breakpoint];
    delete props[breakpoint];

    if (brkPoint) {
      let span = chazzTheme.grid.columns;
      let offset = 0;
      let order = undefined;

      if (typeof brkPoint === 'object' && brkPoint != null) {
        ({ span, offset, order } = brkPoint);
      } else span = brkPoint;

      if (span != null) span = parseSpan(span);
      if (offset != null) offset = parseOffset(offset);
      if (span || offset || order) props[breakpoint] = { span, offset, order };
    }
  });

  // parse singular values for span and offset
  const colOffset = parseOffset(offset);
  const colSpan = parseSpan(span);

  return (
    <StyledCol
      {...props}
      flex={flex}
      offset={colOffset}
      order={order}
      span={colSpan}
    >
      {children}
    </StyledCol>
  )
}