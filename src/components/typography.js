import styled from 'styled-components';

/* Headings - font import on HTML file
Note - with styled-components you can attach an 'as' attribute
to the component and change what element it renders as
Example: <H3 as="h3">Text Here</H3>
*/

export const headingStyle = `
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 52px;
  color: #1F2041;
`;

export const H1 = styled.h1`
  ${headingStyle}
  margin: 0 0 20px;
`;

export const H2 = styled.h2`
  ${headingStyle}
  font-size: 32px;
  line-height: 40px;
  margin: 0 0 20px;
`;

export const H3 = styled.h3`
  ${headingStyle}
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 20px;
`;

export const H4 = styled.h4`
  ${headingStyle}
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  margin: 0 0 12px;
`;

/* Body, label, and other styles */

export const bodyStyle = `
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: .15px;
  color: rgba(31, 32, 65, 0.75);
`;

export const Body = styled.p`
  ${bodyStyle}
  margin: 0 0 20px;
`;

export const captionStyle = `
  ${bodyStyle}
  font-size: 12px;
  line-height: 15px;
  color: rgba(31, 32, 65, 0.75);
`;

export const labelStyle = `
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
  color: rgba(31, 32, 65, 0.75);
`;

export const Label = styled.label`
  ${bodyStyle}
`;