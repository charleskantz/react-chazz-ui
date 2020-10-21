import React from 'react';
import { BannerBasic, BannerClose } from './components';

export function Banner({ close, children, ...props }) {

  return close ? (
    <BannerClose {...props}>{children}</BannerClose>
  ) : (
    <BannerBasic {...props}>{children}</BannerBasic>
  );
}