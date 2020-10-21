---
name: GlobalTheme
keywords:
  - theme
  - provider
  - global theme
  - color
  - typography
  - scheme
---

# GlobalTheme

Use GlobalTheme to share global theme settings throughout the hierarchy of your application. GlobalTheme is a styled-components wrapper that provides the theme to all React components underneath itself via the context API. All styled-components have acces to this theme, even when they are multiple levels deep.

## Implementation

Wrap your app in the GlobalTheme provider at the top level of your app.

```jsx
// index.js (or other top-level component)

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { GlobalTheme } from "react-chazz-ui";

ReactDOM.render(
  <GlobalTheme>
    <App />
  </GlobalTheme>,
  document.getElementById("root")
);
```

## Visual themes

Currently, Chazz UI has one theme that is default to the GlobalTheme provider. When other themes are available (or if you DARE to make your own), you can pass it into the GlobalTheme wrapper:

```jsx
import customTheme from './yourThemeHere';

<GlobalTheme theme={customTheme}>
  <App />
<GlobalTheme>
```

## Whats happening under the hood?

Right now, the GlobalTheme wrapper is doing a few things:
  - Imports a CSS reset to normalize CSS across all browsers
  - Provides a default background color for the app
  - Imports the visual theme that's fed into all components. This theme offers typography and color specs at a central location.
