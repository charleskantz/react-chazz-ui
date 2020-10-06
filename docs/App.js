import React from 'react';
import { H1, H2, H3, H4, Body, Card, ColorPanel, ContentDiv, GlobalStyle, Button } from 'react-chazz-ui';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 1100px;
  }
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Card>
        <ContentDiv>
          <H1>Hello World This is Heading One</H1>
          <H2>Heading Two Checking in, this is Heading Two</H2>
          <H3>Heading Three This is a Header</H3>
          <H4>Heading Four This is a Header</H4>
          <Body>
            Hi there my name is body type and I take
            up a lot of space so my sample text looks
            more like a real thing.
          </Body>
        </ContentDiv>
      </Card>
      <Card>
        <ContentDiv>
          <H4>Testing card creation with placeholder text</H4>
          <Body>
            Hi there my name is body type and I take
            up a lot of space so my sample text looks
            more like a real thing. my name is body type and I take
            up a lot of space so my sample text looks
            more like a real thing.
          </Body>
          <Button>Click Me</Button>
        </ContentDiv>
      </Card>
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
          <Button>Click Me</Button>
        </ContentDiv>
      </Card>
    </Container>
  );
}

export default App;