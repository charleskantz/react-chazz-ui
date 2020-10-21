import React from 'react';
import { HiddenRadio, StyledRadio, RadioDot } from './RadioButton';
import { CheckboxContainer } from '../Checkbox/Checkbox';

/** RadioButton - custom radio button
 *
 */
export function RadioButton({ className, checked, ...props }) {
  return (
    <CheckboxContainer className={className}>
      <HiddenRadio checked={checked} {...props} />
      <StyledRadio checked={checked} >
        <RadioDot />
      </StyledRadio>
    </CheckboxContainer>
  )
}