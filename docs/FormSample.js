import React, { useState } from 'react';
import {
  Card,
  ColorPanel,
  Body,
  InputHelpText,
  Label,
  TextField,
  ContentDiv,
  Banner,
  BodyLabel,
  RadioGroup,
  RadioButton,
  Checkbox,
  RadioLabel,
  CheckboxLabel,
  TextArea,
  Select,
  SelectWrapper,
  RangeSlider,
  Button
} from 'react-chazz-ui';



function FormSample() {

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

  const [form, setForm] = useState(initialForm);

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

    <Card>
      <ColorPanel >
        We can't wait to hear from you!
    </ColorPanel>
      <ContentDiv>
        <Body>
          Give us your contact information and our fake customer
          service team will get back to you shortly.
      </Body>
        <Banner color="red" close>Here's a cool notification!</Banner>
        <form>
          <Label> First Name
          <TextField
              type='text'
              name='firstname'
              placeholder='Jean Luc'
              autoComplete='given-name'
              value={form.firstname}
              onChange={handleChange}
              error={true}
            />
          </Label>
          <InputHelpText error={true} >Testing 1 2 3</InputHelpText>
          <Label> Last Name
          <TextField
              type='text'
              name='lastname'
              placeholder='Picard'
              autoComplete='family-name'
              value={form.lastname}
              onChange={handleChange}
            />
          </Label>
          <Label> Title
          <TextField
              type='text'
              name='jobtitle'
              placeholder='Captain, United Federation of Planets'
              autoComplete='organization-title'
              value={form.title}
              onChange={handleChange}
            />
          </Label>
          <Label> Email
          <TextField
              type='text'
              name='email'
              placeholder='jpicard@federation.gov'
              autoComplete='email'
              value={form.email}
              onChange={handleChange}
            />
          </Label>
          <BodyLabel>
            Choose a radio button
        </BodyLabel>
          <RadioGroup>
            <RadioLabel>
              <RadioButton
                name='option'
                value='option1'
                checked={form.option === 'option1'}
                onChange={handleChange}
              /> Here's Radio 1
          </RadioLabel>
            <RadioLabel>
              <RadioButton
                name='option'
                value='option2'
                checked={form.option === 'option2'}
                onChange={handleChange}
              /> Radio 2 could be cool too
          </RadioLabel>

          </RadioGroup>
          <CheckboxLabel>
            <Checkbox
              name='addComments'
              checked={form.addComments}
              onChange={handleCheck}
            /> Add some comments
        </CheckboxLabel>
          {form.addComments &&
            <>
              <Label> Comments
            <TextArea
                  name='comments'
                  placeholder="Things are only impossible until they're not."
                  value={form.comments}
                  onChange={handleChange}
                  disabled={!form.addComments}
                ></TextArea>
              </Label>
            </>
          }
          <Label>Select one of these
          <SelectWrapper>
              <Select>
                <option>Try this one</option>
                <option>Maybe this</option>
                <option>def not this though</option>
              </Select>
            </SelectWrapper>
          </Label>
          <Label> How's the range here? {form.range}
            <RangeSlider
              name="range"
              min="0"
              max="100"
              step="1"
              value={form.range}
              onChange={handleChange}
            />
          </Label>
          <Button color="blue">Submit</Button>
        </form>
      </ContentDiv>
    </Card>
  )
}

export default FormSample;