import React from 'react';
import { Button } from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
    control: { type: 'select', options: ['default', 'primary', 'dashed'] } },
    size: { control: { type: 'select', options: ['small', 'default', 'large'] } },
    align: { control: { type: 'select', options: ['left', 'center', 'right'] } }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: 'primary',
  label: 'CLICK ME',
  disabled: false,
  danger: false,
  transparent: false,
  loading: false,
  block: false
};