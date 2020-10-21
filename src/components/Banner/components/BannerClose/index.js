import React, { useState } from 'react';
import { Close } from 'styled-icons/material-rounded';
import { StyledBanner } from '../../Banner';
import { CloseSpan } from './BannerClose';

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
          <div>{children}</div>
          <CloseSpan color={color} onClick={closeBanner}>
            <Close size={20} />
          </CloseSpan>
        </StyledBanner>
      }
    </>
  )
}