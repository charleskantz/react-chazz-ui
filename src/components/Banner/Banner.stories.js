import React from 'react';
import { Banner } from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    type: { control: { type: 'select', options: ['default', 'success', 'info', 'warning', 'error'] } },
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
};

const Basic = (args) => <Banner {...args}  />;
export const Primary = Basic.bind({});
Primary.args = {
  type: 'default',
  close: false,
  message: 'This is a test of the banner component.',
  showIcon: false
};

const Close = () => <Banner
  type='default'
  message='This banner is now dismissable. Try it!'
  close
/>;
export const Closable = Close.bind({});

const CloseIcon = () => <Banner
  type='success'
  message='This banner shows an icon based on its type.'
  showIcon
  close
/>;
export const Icon = CloseIcon.bind({});

const AllTypes = () => (
  <>
    <Banner
      type='default'
      message='This is the default style and icon.'
      showIcon
      close
    />
    <Banner
      type='success'
      message='This is the success banner with an icon.'
      showIcon
      close
    />
    <Banner
      type='info'
      message='This banner is for general info with an icon.'
      showIcon
      close
    />
    <Banner
      type='warning'
      message='Warnings should use this banner.'
      showIcon
      close
    />
    <Banner
      type='error'
      message='Something messed up and now you have an error? Use this.'
      showIcon
      close
    />
  </>
);
export const Types = AllTypes.bind({});

