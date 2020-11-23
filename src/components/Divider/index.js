import React from 'react';
import { StyledDivider, DividerWrapper, StyledText } from './Divider';
import PropTypes from 'prop-types';


export function Divider({ dashed, className, direction, bodyText, textJustify, children, ...props }) {

  let leftDivider = '100%';
  let rightDivider = '100%';
  const shortDivider = '15px';

  textJustify === 'left' && (leftDivider = shortDivider);
  textJustify === 'right' && (rightDivider = shortDivider);

  direction === 'vertical' && (leftDivider = shortDivider);

  const checkChildren = () => {
    if (children && direction !== 'vertical') return (
      <>
        <StyledText bodyText={bodyText} >{children}</StyledText>
        <StyledDivider
          dashed={dashed}
          direction={direction}
          className={className}
          width={rightDivider}
          {...props}
        />
      </>
    );
  };

  return (
    <DividerWrapper direction={direction}>
      <StyledDivider
        dashed={dashed}
        direction={direction}
        className={className}
        width={leftDivider}
        {...props}
      />
      {checkChildren()}
    </DividerWrapper>
  );
}

Divider.propTypes = {
  /** Sets dividing line(s) to be dashed */
  dashed: PropTypes.bool,
  /** Determines direction of divider */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Passes className to internal dividing element(s) */
  className: PropTypes.string,
  /** If text is added to divider, this can toggle text style to the body style */
  bodyText: PropTypes.bool,
  /** Sets justification of text on divider */
  textJustify: PropTypes.oneOf(['left', 'center', 'right'])
}