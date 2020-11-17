import React from 'react';
import { Card } from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Card',
  component: Card,
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
};

const Basic = (args) => <Card {...args}  />;
export const Primary = Basic.bind({});
Primary.args = {
  children: 'Here\'s some content. It\'s pretty basic.'
}