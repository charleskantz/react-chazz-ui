import React from 'react';
import { Col } from './index';
import { Row } from '../Row';
import styled from 'styled-components';

// This default export determines where your story goes in the story list
export default {
  title: 'Col',
  component: Col,
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
};

const ColorDiv = styled.div`
  background: ${p => p.bg};
  height: 50px;
`;

const Basic = (args) => (
  <Row>
    <Col {...args} ><ColorDiv bg='red' /></Col>
  </Row>
);
export const Primary = Basic.bind({});
Primary.args = {
  span: 12,
  offset: 0,
};