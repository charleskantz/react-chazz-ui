import React from 'react';
import { StyledButton } from './Button';
import { chazzTheme } from '../GlobalTheme/theme';
import { Loading } from '../Loading';

export function Button({ type = 'default', loading, danger, disabled, transparent, children, ...props }) {

  const parseBGColor = () => {
    let color = 'ink';
    if (type === 'primary') color = 'blue';
    if (danger) color = 'red';
    return color;
  }

  const parseBorderType = () => {
    let borderType = "none";
    if (type === "dashed") borderType =" dashed";
    if (disabled || transparent || type === "default") borderType = "solid";
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

  return (
    <StyledButton
      transparent={transparent}
      borderColor={borderColor}
      color={color}
      disabled={disabled}
      borderType={borderType}
      {...props}
      loading={loading}
    >
      {loading ? <Loading size="14" /> : children}
    </StyledButton>
  )
}