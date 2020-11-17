import React, { useEffect } from 'react';
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon } from './Checkbox';
import PropTypes from 'prop-types';

export function Checkbox({ className, checked = false, defaultChecked = false, disabled = false, ...props }) {

  useEffect(() => {
    if (defaultChecked) {
      checked = true;
    }
  }, []);

  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} disabled={disabled} >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

Checkbox.propTypes = {
  /** Determines if the checkbox is checked */
  checked: PropTypes.bool,
  /** Passes classes to checkbox */
  className: PropTypes.string,
  /** Sets the initial checkbox state to be true */
  defaultChecked: PropTypes.bool,
  /** Sets the checkbox in a disabled state */
  disabled: PropTypes.bool,

}