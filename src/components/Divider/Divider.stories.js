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

const DivCentered = styled.div`
  text-align: center;
`;

const Basic = (args) => <Divider {...args} />;
export const Primary = Basic.bind({});
Primary.args = {
  dashed: false,
  direction: 'horizontal',
  bodyText: false,
  textJustify: 'center',
  children: ''
};

const Text = () => (
  <>
    <Divider>Here's some text at Header size</Divider>
    <Divider bodyText={true} >Here's some text at body size</Divider>
  </>
)
export const WithText = Text.bind({});

const Styling = () =>
  <DivCentered>
    <p>Horizontal styles</p>
    <Divider />
    <Divider dashed />
    <p>Vertical styles</p>
    <br />
    <Divider direction='vertical' />
    <Divider direction='vertical' dashed />
  </DivCentered>
export const Styles = Styling.bind({});

const Verticals = () =>
  <>
    Test 1
    <Divider direction='vertical' />
    Test 2
    <Divider direction='vertical' />
    Test 3
  </>
export const Vertical = Verticals.bind({});