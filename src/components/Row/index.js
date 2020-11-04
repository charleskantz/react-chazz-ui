import React from 'react';
import { StyledRow } from './Row';

export function Row({ gutter, align, justify, children, ...props}) {

  const parseGutter = gutter => {
    let xMargin, yMargin;
    if (gutter) {
      if (Array.isArray(gutter) && gutter.length === 2) {
        [ xMargin, yMargin ] = gutter;
      } else {
        xMargin = `${gutter}px`;
        yMargin = `${gutter}px`;
      }
    } else {
      xMargin = '15px';
      yMargin = '15px';
    }
    return [ xMargin, yMargin ];
  }

  let [ xGutter, yGutter ] = parseGutter(gutter);

  return (
    <StyledRow justify={justify} align={align} xGutter={xGutter} yGutter={yGutter} {...props} >
      {children}
    </StyledRow>
  )
}