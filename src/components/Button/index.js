import React from 'react';
import { StyledButton } from './Button';

export function Button({ children, ...props }) {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  )
}