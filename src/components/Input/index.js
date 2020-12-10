import React from 'react';
import { StyledInput, InputContainer } from './Input';
import PropTypes from 'prop-types';

export function Input({ size = 'lg', ...props }) {

  const sizes = ['sm', 'md', 'lg']

  if (!sizes.includes(size)) {
    console.warn('Input element size prop must be sm, md, or lg.');
    size = 'lg'
  }
  return (
    <InputContainer size={size} >
      <StyledInput size={size}  {...props} />
    </InputContainer>
  )
}

Input.propTypes = {
  /** Sets vertical height of input  */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}