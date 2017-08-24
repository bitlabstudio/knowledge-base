# Javascript > ReactJS > Styling Components

In this file:

* [Setup](#setup)
* [Usage](#usage)

## Setup

Lean more about [react-glamorous](https://github.com/paypal/glamorous).

Create a `theme.js` file somewhere in your project:

```js
// file: theme.js
export const theme = {
  // first we define all colors that can occur in the project. No color should
  // ever be defined in any of the component files:
  colorPrimary: '#000000',
  colorSecondary: '#EFEFEF',
  colorDanger: '#FF0000',
  colorSuccess: '#00FF00',
  // next we define our two main fonts:
  fontSerif: 'serif',
  fontSansSerif: 'sans-serif',
  // next we define various font sizes. You don't need to turn every possible
  // font size into a variable. Many UI elements are isolated and unique items
  // and their font sizes are in no relation to anything else on the page, these
  // font sizes don't belong here.
  // H1 and P are related to each other. If we change one of them, we might want
  // to re-balance all of them, so it is nice to have them all here grouped
  // together.
  fontSizeH1: '31px',
  fontSizeH2: '21px',
  fontSizeH3: '18px',
  fontSizeH4: '15px',
  fontSizeH5: '14px',
  fontSizeH6: '12px',
  fontSizeP: '10px',
  fontSizeInput: '9px',
  // next we define important heights:
  // for convenience, we also define them as numeric values because we often
  // have to add them up
  heightInputNum: 34,
  heightInput: '34px',
  // finally, we define all z-index that are used in the project, ordered by
  // value so we can see what would render on top of what
  zIndexModal: 999,
  zIndexMainNavigation: 998,
}  
```

Now wrap your entire application in a `ThemeProvider`:

```js
// file App.js
import React, { Component } from 'react'
import { ThemeProvider } from 'glamorous'

import { theme } from './theme.js'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          Your app markup here...
        </div>
      </ThemeProvider>
    )
  }
}

export default App
```

## Usage
