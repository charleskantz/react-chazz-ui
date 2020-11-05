import React from 'react';
import { BannerBasic, BannerClose } from './components';

export function Banner({ close, type, children, ...props }) {

  const bgColor = 'sky';
  const bannerTypes = [ 'success', 'info', 'warning', 'error' ];

  if (type && bannerTypes.includes(type)) {
    switch (type) {
      case 'success':

        break;

      default:
        break;
    }
  }
  return close ? (
    <BannerClose {...props}>{children}</BannerClose>
  ) : (
    <BannerBasic {...props}>{children}</BannerBasic>
  );
}