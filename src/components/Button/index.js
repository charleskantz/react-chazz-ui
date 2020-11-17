import React, { useState } from 'react';
import { StyledButton } from './Button';
import { Loading } from '../Loading';
import PropTypes from 'prop-types';

export function Button({
  type = 'default',
  loading = false,
  danger = false,
  disabled = false,
  transparent = false,
  align = 'left',
  label = 'Submit',
  size = 'default',
  width = 'auto',
  shape = 'round',
  onClick,
  children,
  ...props }) {

  const [ clickAnim, setClickAnim ] = useState(false);

  const parseBGColor = () => {
    let color = 'ink';
    if (type === 'primary') color = 'blue';
    if (danger) color = 'red';
    return color;
  }

  const parseBorderType = () => {
    let borderType = "none";
    if (disabled || transparent || type === "default") borderType = "solid";
    if (type === "dashed") borderType =" dashed";
    return borderType;
  }

  const parseBorderColor = () => {
    let borderColor = 'sky';
    if (type === 'primary') borderColor = 'blue';
    if (danger) borderColor = 'red';
    if (disabled) borderColor = 'sky';
    return borderColor;
  }

  const borderType = parseBorderType();
  const borderColor = parseBorderColor();
  const color = parseBGColor();

  const handleClick = e => {
    setClickAnim(true);
    if (onClick) onClick(e);
    setTimeout(() => {
      setClickAnim(false);
    }, 250);
  }

  return (
    <StyledButton
    {...props}
      type={type}
      transparent={transparent}
      borderColor={borderColor}
      color={color}
      disabled={disabled}
      borderType={borderType}
      loading={loading ? 'loading' : undefined}
      align={align}
      size={size}
      shape={shape}
      width={width}
      clickAnim={clickAnim}
      onClick={handleClick}
    >
      {loading ? <Loading size="14" notext /> : label || children}
    </StyledButton>
  )
}

Button.propTypes = {
  /** Changes visual style of button */
  type: PropTypes.oneOf(['default', 'primary', 'dashed']),
  /** Sets button size to three presets: small, medium, large */
  size: PropTypes.oneOf(['small', 'default', 'large']),
  /** Sets button size to three presets: small, medium, large */
  shape: PropTypes.oneOf(['square', 'round', 'circle']),
  /** Manually sets width of button. A value of '100%' will make button fill its parent's width.
   * Useful for maintaining consistent width when button enters loading state.
  */
  width: PropTypes.string,
  /** Places button in a loading state */
  loading: PropTypes.bool,
  /** Sets the danger status of button */
  danger: PropTypes.bool,
  /** Sets button in a disabled state */
  disabled: PropTypes.bool,
  /** Makes button background transparent, inverts text color, and sets border */
  transparent: PropTypes.bool,
  /** Sets the position of the button horizontally */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Text for button  */
  label: PropTypes.string
}