import React, { useState } from 'react';
import { Button } from './index';
import styled from 'styled-components';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: { control: { type: 'select', options: ['default', 'primary', 'dashed'] } },
    size: { control: { type: 'select', options: ['small', 'default', 'large'] } },
    align: { control: { type: 'select', options: ['left', 'center', 'right'] } },
    shape: { control: { type: 'select', options: ['square', 'circle', 'round'] } },
  },
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
  flex-wrap: wrap;
  & > button {
    margin: 5px;
  }
`;

const Basic = (args) => <Button {...args} />;

export const Primary = Basic.bind({});

Primary.args = {
  type: 'primary',
  label: 'CLICK ME',
  disabled: false,
  danger: false,
  transparent: false,
  loading: false,
};

const Style = (args) => (
  <Div>
    <Button {...args} type='primary' label='Primary' />
    <Button {...args} type='default' label='Default' />
    <Button {...args} type='dashed' label='Dashed' />
  </Div>
);

export const Styles = Style.bind({});

Styles.args = {
  disabled: false,
  danger: false,
  transparent: false,
  loading: false,
};

const Size = (args) => (
  <Div>
    <Button {...args} size='small' label='Small' />
    <Button {...args} size='default' label='Default' />
    <Button {...args} size='large' label='Large' />
  </Div>
);

export const Sizes = Size.bind({});

Sizes.args = {
  type: 'default',
  disabled: false,
  danger: false,
  transparent: false,
  loading: false,
  shape: 'round'
};

const Shape = (args) => (
  <Div>
    <Button {...args} shape='square' label='Square' />
    <Button {...args} shape='round' label='Round' />
    <Button {...args} shape='circle' label='Circle' />
  </Div>
);

export const Shapes = Shape.bind({});

Shapes.args = {
  type: 'primary',
  disabled: false,
  danger: false,
  transparent: false,
  loading: false,
};

const State = (args) => (
  <>
    <p style={{ textAlign: 'center' }}>Primary: </p>
    <Div style={{ alignItems: 'center', marginBottom: '2em' }}>
      <Button {...args} type='primary' danger label='Danger' />
      <Button {...args} type='primary' disabled label='Disabled' />
      <Button {...args} type='primary' transparent label='Transparent' />
    </Div>
    <p style={{ textAlign: 'center' }}>Default: </p>
    <Div style={{ alignItems: 'center', marginBottom: '2em' }}>
      <Button {...args} type='default' danger label='Danger' />
      <Button {...args} type='default' disabled label='Disabled' />
      <Button {...args} type='default' transparent label='Transparent' />
    </Div>
    <p style={{ textAlign: 'center' }}>Dashed: </p>
    <Div style={{ alignItems: 'center', marginBottom: '1em' }}>
      <Button {...args} type='dashed' danger label='Danger' />
      <Button {...args} type='dashed' disabled label='Disabled' />
      <Button {...args} type='dashed' transparent label='Transparent' />
    </Div>
  </>
);

export const States = State.bind({});

States.args = {
  disabled: false,
  danger: false,
  transparent: false,
  loading: false,
};

const Load = (args) => {

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleLoad1 = () => {
    setLoading1(!loading1);
  }

  const handleLoad2 = () => {
    setLoading2(!loading2);
  }

  return (
    <Div>
      <Button
        {...args}
        loading={loading1}
        onClick={handleLoad1}
        label='Click to Trigger Loading'
      />
      <Button
        {...args}
        loading={loading2}
        onClick={handleLoad2}
        label='Loading with custom width set'
        width='325px'
      />
    </Div>
  )
};

export const Loading = Load.bind({});

Loading.args = {
  type: 'primary',
  disabled: false,
  danger: false,
  transparent: false,
};
