import React from 'react';
import { Divider } from './index';
import styled from 'styled-components';

// This default export determines where your story goes in the story list
export default {
  title: 'Divider',
  component: Divider,
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
};

const Basic = (args) => <Divider {...args} />;
export const Primary = Basic.bind({});
Primary.args = {
  dashed: false,
  direction: 'horizontal',
  bodyText: false,
  textJustify: 'center',
  children: ''
};

const Text = () =>
  <Divider>
    Here's some text for the divider
  </Divider>;
export const WithText = Text.bind({});

const Horizontals = () =>
  <>
    Test 1
    <Divider direction='vertical' />
    Test 2
    <Divider direction='vertical' />
    Test 3
  </>
export const Vertical = Horizontals.bind({});