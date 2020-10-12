import React from 'react';
import { CheckboxContainer, HiddenRadio, StyledRadio, RadioDot } from './form';

export function Radio({ className, checked, ...props }) {
  return (
    <CheckboxContainer className={className}>
      <HiddenRadio checked={checked} {...props} />
      <StyledRadio checked={checked} >
        <RadioDot />
      </StyledRadio>
    </CheckboxContainer>
  )
}