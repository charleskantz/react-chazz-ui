import React from 'react';
import { Banner } from '../components/Banner';

// This default export determines where your story goes in the story list
export default {
  title: 'Banner',
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'hello this is a test',
  close: true,

};