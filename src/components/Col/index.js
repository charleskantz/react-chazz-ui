import React from 'react';
import { StyledCol } from './Col';
import { chazzTheme } from 'react-chazz-ui';
import { colToPercent } from '../../utils/colToPercent';

export function Col({ flex, offset, order, span, children, ...props }) {

  // todo: parse props

  const parseSpan = () => {
    if (span) {
      if (span > chazzTheme.grid.columns || span < 1) {
        throw Error(`Span value must be an integer between 1 and ${chazzTheme.grid.columns}.`);
      }
    } else {
      span = 12;
    }
    return colToPercent(span);
  }

  const parseOffset = () => {
    if (offset) {
      if (offset > chazzTheme.grid.columns || offset < 1) {
        throw Error(`Offset value must be an integer between 1 and ${chazzTheme.grid.columns}.`);
      }
    } else {
      offset = 0;
    }
    return colToPercent(offset);
  }

  const colOffset = parseOffset(offset);
  const colSpan = parseSpan(span);

  return (
    <StyledCol {...props} flex={flex} offset={colOffset} order={order} span={colSpan}>
      {children}
    </StyledCol>
  )
}