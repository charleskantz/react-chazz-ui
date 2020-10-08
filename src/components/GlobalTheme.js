import React from 'react'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { chazzTheme } from "./theme";

// adding a CSS reset for better consistency across browsers
import 'reset-css';

// these styles live globally with values pulled from ThemeProvider
const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => props.theme.color.sky.base};
  }

  h1, h2, h3 {
    font-family: ${props => props.theme.typography.headingFont};
  }

  body {
    font-family: ${props => props.theme.typography.bodyFont};
  }
`;

/** GlobalTheme - Higher Order Component that encapsulates a
 *  CSS reset and global styling with the UI ThemeProvider
 * @param {Object} theme - if I decide to create additional themes, you could override the default with this prop
 * @param {*} children - elements between GlobalTheme tags
 */
export function GlobalTheme({ theme = chazzTheme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}