import React from 'react';
import { StyledBanner } from '../../Banner';

export function BannerBasic({ color, children, ...props}) {
  return (
    <StyledBanner color={color} {...props}>
      <div>{children}</div>
    </StyledBanner>
  )
}