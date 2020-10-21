import React from 'react';
import { InputHelp } from './InputHelpText';
import { ErrorOutline } from 'styled-icons/material-rounded';

export function InputHelpText({ error, children, ...props }) {

  return error ? (
    <InputHelp error {...props}>
      <ErrorOutline size={16} />
      {children}
    </InputHelp>
  ) : ( <InputHelp {...props}>{children}</InputHelp>
  )
}