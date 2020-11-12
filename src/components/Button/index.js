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
  block = false,
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
      transparent={transparent}
      borderColor={borderColor}
      color={color}
      disabled={disabled}
      borderType={borderType}
      loading={loading}
      align={align}
      block={block}
      size={size}
      clickAnim={clickAnim}
      onClick={handleClick}
      {...props}
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
  label: PropTypes.string,
  /** Fits button width to its parent width */
  block: PropTypes.bool
}