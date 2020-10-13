import React, { useState } from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Body,
  Card,
  ColorPanel,
  ContentDiv,
  GlobalTheme,
  Button,
  Banner,
  Badge,
  TextField,
  InputLabel,
  TextArea,
  Form,
  Checkbox,
  CheckboxLabel,
  Radio,
  RadioLabel,
  Select,
  SelectWrapper,
  Range
} from 'react-chazz-ui';
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

  const initialForm = {
    firstname: '',
    lastname: '',
    title: '',
    email: '',
    option: 'option1',
    addComments: true,
    comments: '',
    range: '0'
  }

  const [ form, setForm ] = useState(initialForm);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  }

  const handleCheck = () => {
    setForm(form => ({
      ...form,
      addComments: !form.addComments
    }))
  }

  return (
    <GlobalTheme>
      <Container>
        <Card>
          <ContentDiv>
            <H1>Hello World This is Heading One</H1>
            <H2>Heading Two Checking in, this is Heading Two</H2>
            <H3>Heading Three <Badge color="sky">Completed</Badge></H3>
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
            <Banner>
              This is a banner test
            </Banner>
            <H4>Testing card creation with placeholder text</H4>
            <Banner color="blue">
              This is a banner test
            </Banner>
            <Body>
              Hi there my name is body type <Badge color="yellow">Yep here</Badge>
            </Body>
            <InputLabel> Testing the label
              <TextField type="text" placeholder="placeholder text here" />
            </InputLabel>
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
            <Button fullWidth color="teal">Click Me</Button>
          </ContentDiv>
        </Card>
        <Card>
          <ColorPanel >
            We can't wait to hear from you!
          </ColorPanel>
          <ContentDiv>
            <Body>
              Give us your contact information and our fake customer
              service team will get back to you shortly.
            </Body>
            <Form>
              <InputLabel> First Name
                <TextField
                  type='text'
                  name='firstname'
                  placeholder='Jean Luc'
                  autoComplete='given-name'
                  value={form.firstname}
                  onChange={handleChange}
                />
              </InputLabel>
              <InputLabel> Last Name
                <TextField
                  type='text'
                  name='lastname'
                  placeholder='Picard'
                  autoComplete='family-name'
                  value={form.lastname}
                  onChange={handleChange}
                />
              </InputLabel>
              <InputLabel> Title
                <TextField
                  type='text'
                  name='jobtitle'
                  placeholder='Captain, United Federation of Planets'
                  autoComplete='organization-title'
                  value={form.title}
                  onChange={handleChange}
                />
              </InputLabel>
              <InputLabel> Email
                <TextField
                  type='text'
                  name='email'
                  placeholder='jpicard@federation.gov'
                  autoComplete='email'
                  value={form.email}
                  onChange={handleChange}
                />
              </InputLabel>
              <H5>
                Choose a radio button:
              </H5>
              <RadioLabel>
                <Radio
                  name='option'
                  value='option1'
                  checked={form.option === 'option1'}
                  onChange={handleChange}
                /> Here's Radio 1
              </RadioLabel>
              <RadioLabel>
                <Radio
                  name='option'
                  value='option2'
                  checked={form.option === 'option2'}
                  onChange={handleChange}
                /> Radio 2 could be cool too
              </RadioLabel>
              <CheckboxLabel>
                <Checkbox
                  name='addComments'
                  checked={form.addComments}
                  onChange={handleCheck}
                /> Add some comments
              </CheckboxLabel>
              <InputLabel> Comments
                <TextArea
                  name='comments'
                  placeholder="Things are only impossible until they're not."
                  value={form.comments}
                  onChange={handleChange}
                  disabled={!form.addComments}
                ></TextArea>
              </InputLabel>
              <InputLabel>Select one of these
                <SelectWrapper>
                  <Select>
                    <option>Try this one</option>
                    <option>Maybe this</option>
                    <option>def not this though</option>
                  </Select>
                </SelectWrapper>
              </InputLabel>
              <InputLabel> How's the range here? {form.range}
                <Range
                  name="range"
                  min="0"
                  max="100"
                  step="1"
                  value={form.range}
                  onChange={handleChange}
                  />
              </InputLabel>
            </Form>
            <Button fullWidth color="blue">Submit</Button>
          </ContentDiv>
        </Card>
      </Container>
    </GlobalTheme>
  );
}

export default App;