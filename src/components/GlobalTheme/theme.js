import {
  purple,
  indigo,
  blue,
  teal,
  green,
  yellow,
  orange,
  red,
  sky,
  ink
} from './color';

import {
  labelStyle,
  bodyStyle,
  headingStyle,
  captionStyle
} from './typography';

import {
  columns,
  gutterWidth,
  breakpoints,
  containerMaxWidths
} from './variables';

/* Global Theme for Chazz UI */

export const chazzTheme = {
  color: {
    purple,
    indigo,
    blue,
    teal,
    green,
    yellow,
    orange,
    red,
    sky,
    ink
  },
  typography: {
    bodyStyle,
    headingStyle,
    labelStyle,
    captionStyle,
    headingFont: "'Quicksand', sans-serif",
    bodyFont: "'Montserrat', sans-serif"
  },
  grid: {
    columns,
    gutterWidth,
    breakpoints,
    containerMaxWidths
  }
}