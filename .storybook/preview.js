// storybook config
import React from 'react';
import { GlobalTheme } from '../src/components/GlobalTheme/GlobalTheme';

// Global decorator to apply theme styling to all stories
export const decorators = [
  Story => (
    <>
      <GlobalTheme>
        <Story />
      </GlobalTheme>
    </>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'Chazz BG',
    values: [
      {
        name: 'Chazz BG',
        value: '#DFE3E8'
      }
    ]
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
}

