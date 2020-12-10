import React from 'react';
import { Input } from './index';
import styled from 'styled-components';

// This default export determines where your story goes in the story list
export default {
  title: 'Input',
  component: Input,
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

const Basic = (args) => <Input {...args} />;
export const Primary = Basic.bind({});
Primary.args = {
};

const Sizes = () => (
  <>
    <Input size='sm' placeholder='Here is the small input' />
    <Input size='md' placeholder='Here is the medium input' />
    <Input size='lg' placeholder='Here is the large input' />
  </>
)
export const SizeOptions = Sizes.bind({});
