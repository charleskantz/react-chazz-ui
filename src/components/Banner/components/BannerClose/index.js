import React, { useState } from 'react';
import { Close } from 'styled-icons/material-rounded';
import { StyledBanner } from '../../Banner';
import { CloseSpan, ContentSpan } from './BannerClose';

export function BannerClose({ color, children, ...props }) {

  const [isOpen, setIsOpen] = useState(true);
  const [animate, setanimate] = useState(false);

  const closeBanner = () => {
    setanimate(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 250);
  }

  return (
    <>
      {isOpen &&
        <StyledBanner animate={animate} color={color} {...props}>
          <ContentSpan>{children}</ContentSpan>
          <CloseSpan color={color} >
            <Close onClick={closeBanner} size={20} />
          </CloseSpan>
        </StyledBanner>
      }
    </>
  )
}