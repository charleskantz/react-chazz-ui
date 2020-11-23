import React from 'react';
import { StyledCol } from './Col';
import { chazzTheme } from '../GlobalTheme/theme';
import { colToPercent } from '../../utils/colToPercent';
import PropTypes from 'prop-types';

export function Col({ sm, md, lg, xl, flex, offset = 0, order, span = 12, children, ...props }) {

  const breakpoints = [ 'sm', 'md', 'lg', 'xl' ];

  const parseSpan = spanVal => {
    if (spanVal) {
      if (spanVal > chazzTheme.grid.columns || spanVal < 1) {
        console.warn(`Span value must be an integer between 1 and ${chazzTheme.grid.columns}.`);
        spanVal = 12;
      }
    } else {
      spanVal = 12;
    }
    return colToPercent(spanVal);
  }

  const parseOffset = offsetVal => {
    if (offsetVal) {
      if (offsetVal > chazzTheme.grid.columns || offsetVal < 1) {
        console.warn(`Offset value must be an integer between 1 and ${chazzTheme.grid.columns}.`);
        offsetVal = 0;
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

Col.propTypes = {
  /** Sets width of Col based on 12-column grid */
  span: PropTypes.number,
  /** Adds margin-left to Col based on 12-column grid */
  offset: PropTypes.number,
  /** Manually set order of columns. If some elements do not have order
   * defined, then ordered items will come AFTER unordered ones.
   */
  order: PropTypes.number,
  /** Creates separate rules for Col based on 'sm' breakpoint.
   * { `span`, `offset`, `order` }
   */
  sm: PropTypes.objectOf(PropTypes.number),
    /** Creates separate rules for Col based on 'md' breakpoint.
   * { `span`, `offset`, `order` }
   */
  md: PropTypes.objectOf(PropTypes.number),
    /** Creates separate rules for Col based on 'lg' breakpoint.
   * { `span`, `offset`, `order` }
   */
  lg: PropTypes.objectOf(PropTypes.number),
    /** Creates separate rules for Col based on 'xl' breakpoint.
   * { `span`, `offset`, `order` }
   */
  xl: PropTypes.objectOf(PropTypes.number),
}