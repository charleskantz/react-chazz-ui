import React, { useState } from 'react';
import { StyledBanner, CloseSpan, IconSpan, ContentSpan } from './Banner';
import PropTypes from 'prop-types';
import { Info, CheckCircle, ErrorOutline, HighlightOff } from '@styled-icons/material-outlined';
import { Close } from '@styled-icons/material-rounded';

export function Banner({ type = 'default', showIcon = false, close = false, message, children, ...props }) {

  const [isOpen, setIsOpen] = useState(true);
  const [animate, setanimate] = useState(false);

  const closeBanner = () => {
    setanimate(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 250);
  }


  let color = '';
  let BannerIcon;

  const bannerTypes = {
    success: 'green',
    info: 'blue',
    warning: 'yellow',
    error: 'red'
  };

  if (bannerTypes[type]) {
    color = bannerTypes[type];
  }

  const iconTypes = {
    success: CheckCircle,
    info: Info,
    warning: ErrorOutline,
    error: HighlightOff,
    default: Info
  };

  if (iconTypes[type]) {
    BannerIcon = iconTypes[type];
  }

  return (
    <>
      {
        isOpen &&
        <StyledBanner {...props} animate={animate} color={color}>
          {showIcon && <IconSpan color={color} ><BannerIcon size={22} /></IconSpan>}
          <ContentSpan>{message || children}</ContentSpan>
          {close &&
            <CloseSpan color={color} >
              <Close onClick={closeBanner} size={20} />
            </CloseSpan>
          }
        </StyledBanner>
      }
    </>
  )
}

Banner.propTypes = {
  /** Sets visual style of banner */
  type: PropTypes.oneOf(['default', 'success', 'info', 'warning', 'error']),
  /** Message to be displayed */
  message: PropTypes.string,
  /** Shows close button to dismiss banner */
  close: PropTypes.bool,
  /** Toggles display of icon before message */
  showIcon: PropTypes.bool
}