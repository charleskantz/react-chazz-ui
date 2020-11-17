import React from 'react';
import { Checkbox } from './index';
import styled from 'styled-components';

// This default export determines where your story goes in the story list
export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Basic = (args) => <Checkbox {...args}  />;
export const Primary = Basic.bind({});
Primary.args = {
  checked: false
};

const State = (args) => (
  <Div>
    <Checkbox {...args} />
    <Checkbox {...args} checked />
    <Checkbox {...args} disabled />
    <Checkbox {...args} checked disabled />
  </Div>
);
export const States = State.bind({});
States.args = {
  checked: false
};
