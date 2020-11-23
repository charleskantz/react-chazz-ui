import React from 'react';
import { Col } from './index';
import { Row } from '../Row';
import { Card } from '../Card';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

// This default export determines where your story goes in the story list
export default {
  title: 'Col',
  component: Col,
  parameters: {
    viewport: {
      viewports: {
         ...MINIMAL_VIEWPORTS
      },
    },
    docs: {
      description: {
        component: 'some component _markdown_'
      },
      source: {
        type: 'code'
      }
    }
  }
};


const Basic = (args) => (
  <Row>
    <Col {...args} >
      <Card bg='gainsboro' />
    </Col>
  </Row>
);
export const Primary = Basic.bind({});
Primary.args = {
  span: 12,
  offset: 0,
};

const Multi = () => (
  <Row>
    <Col span={4} >
      <Card bg='gainsboro'>Span: 4, Offset: 0</Card>
    </Col>
    <Col span={4} >
      <Card bg='gainsboro'>Span: 4, Offset: 0</Card>
    </Col>
    <Col span={4} >
      <Card bg='gainsboro'>Span: 4, Offset: 0</Card>
    </Col>
  </Row>
);
export const ThreeUp = Multi.bind({});
ThreeUp.args = {};

const Offset = () => (
  <Row>
    <Col span={3} offset={1}>
      <Card bg='gainsboro'>Span: 2, Offset: 1</Card>
    </Col>
    <Col span={2} offset={1}>
      <Card bg='gainsboro'>Span: 3, Offset: 1</Card>
    </Col>
    <Col span={3} offset={1}>
      <Card bg='gainsboro'>Span: 2, Offset: 1</Card>
    </Col>
  </Row>
);
export const Offsets = Offset.bind({});
Offsets.args = {};

const Order = () => (
  <Row>
    <Col span={4} order={3}>
      <Card bg='gainsboro'>Span: 2, order: 3</Card>
    </Col>
    <Col span={4} order={1}>
      <Card bg='gainsboro'>Span: 3, order: 1</Card>
    </Col>
    <Col span={4} order={2}>
      <Card bg='gainsboro'>Span: 2, order: 2</Card>
    </Col>
  </Row>
);
export const CustomOrder = Order.bind({});
CustomOrder.args = {};

const Breaks = () => {
  const xlBreakpoint = { span: 12, offset: 0 };
  const lgBreakpoint = { span: 10, offset: 1 };
  const mdBreakpoint = { span: 8, offset: 2 };
  const smBreakpoint = { span: 6, offset: 3 };

  return (
    <Row>
      <Col
        sm={smBreakpoint}
        md={mdBreakpoint}
        lg={lgBreakpoint}
        xl={xlBreakpoint}
      >
        <Card bg='gainsboro'></Card>
      </Col>
    </Row>
  )
};
export const CustomBreakpoints = Breaks.bind({});
CustomBreakpoints.args = {};