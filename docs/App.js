import React, { useState } from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Body,
  BodyLabel,
  Card,
  ColorPanel,
  ContentDiv,
  GlobalTheme,
  Button,
  Banner,
  Badge,
  TextField,
  Label,
  InputHelpText,
  Divider,
  Row, Col
} from 'react-chazz-ui';
import FormSample from './FormSample';

function App() {

  const [loading, setLoading] = useState(false);

  const handleSwitch = () => {
    setLoading(load => !load);
  }

  return (
    <GlobalTheme>
      <Row>
        <Col
          span={12}
          order={2}
          offset={0}
          md={{ span: 5, offset: 1, order: 1 }}
          lg={{ span: 6, offset: 0, order: 2 }}
        >
          <H1>Hello World This is Heading One</H1>
          <H2>Heading Two Checking in, this is Heading Two</H2>
          <H3>Heading Three <Badge color="sky">Completed</Badge></H3>
          <H4>Heading Four This is a Header</H4>
          <Body>
            Hi there my name is body type and I take
            up a lot of space so my sample text looks
            more like a real thing.
              </Body>
        </Col>
        <Col
          span={12}
          order={1}
          offset={0}
          md={{ span: 5, offset: 0, order: 2 }}
          lg={{ span: 6, offset: 0, order: 1 }}
        >
          <Card>
            <ContentDiv>
              <Banner >
                This is a banner test
              </Banner>
              <H4>Testing card creation with placeholder text TES</H4>
              <Banner color="blue" close>
                <H5>This is a cool banner!</H5>
                <Divider />
                <Body>
                  This is a banner test what happens when shit is so long it has to be multiple lines
                </Body>
                <Button slim>Yeah baby</Button>
              </Banner>
              <Body>
                Hi there my name is body type <Badge color="yellow">Yep here</Badge>
              </Body>
              <Label> Testing the label
                <TextField type="text" placeholder="placeholder text here" />
              </Label>
              <InputHelpText >Testing 1 2 3</InputHelpText>
              <Button>Click Me</Button>
            </ContentDiv>
          </Card>
        </Col>
        {/* <Col span={4} order={2}>
          <Card>
            <ColorPanel>
              Here's some cool text for the color panel
            </ColorPanel>
            <ContentDiv>
              <H4>Testing card creation with placeholder text</H4>
              <Body>
                Hi there my name is body type and I take
                up a lot of space so my sample text looks
                more like a real thing. my name is body type and I take
                up a lot of space so my sample text looks
                more like a real thing.
              </Body>
              <Button danger loading={loading ? 'loading' : undefined} onClick={handleSwitch}>Click Me</Button>
            </ContentDiv>
          </Card>
        </Col> */}
      </Row>
      <Row gutter={10}>
        <Col>
          <FormSample />
        </Col>
      </Row>
    </GlobalTheme>
  );
}

export default App;