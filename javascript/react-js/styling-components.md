# Javascript > ReactJS > Styling Components

In this file:

* [Setup](#setup)
* [Usage](#usage)
  * [A component with layout and styles](#a-component-with-layout-and-styles)

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

### A component with layout and styles

```js
// file SomeComponent.js
import React, { Component } from 'react'
import glamorous from 'glamorous'

// This is not our real component. This is just one styled div in our real
// component.
const Container = glamorous.div(props => ({
  fontFamily: props.theme.fontSerif,
  fontSize: props.theme.fontSizeP,
  // if you have a prop that changes the value of one style, do it like this:
  opacity: props.extraProp ? 1 : 0.5,
  // media queries work like expected:
  '@media(max-width: 767px)': {
    color: 'white',
  }
  // if this component might have a <Link> component in it's children, this is
  // a nice trick to style the link component as well
  '> a': {
    color: 'inherit'
  }
}),
// if you have a prop, that changes the value of many styles, doing all kinds
// of `props.value ? 'foo' : 'bar'` will become difficult to understand.
// Better add a new style object that overrides the first one:
props => {
  if (props.variant === 'blue') {
    return {
      color: 'blue',
      backgroundColor: 'black',
    }
  }
  return undefined
})
// Make sure to give each glamorous component a displayName:
Container.displayName = 'path.to.this.file.Container'

// This is another div in our real component
const Box = glamorous.div({
  color: 'green'
})
Box.displayName = 'path.to.this.file.Box'

// Now our real component composes the styled glamorous components
class SomeComponent extends Component {
  render() {
    return (
      <Container extraProp={true} variant="blue" css={{ display: 'flex'}}>
        {/* Don't create glamorous containers for simple divs that only deal
            with layout. It's easier to understand the layout when you see
            the divs and their flex/width/height/display/position styles right here.
        */}
        <div style={{ flex: 1, flexDirection: 'column' }}>
          Your app markup here...
        </div>
        {/* If you have a component that has layout styles which should be
            visible right here, but ALSO lots of other fancy styles, then
            you can turn it into a glamorous component, but add the layout
            styles here via the css prop (which overrides all other existing
            styles)
        */}
        <Box css={{ flex: 2 }} />
      </Container>
    )
  }
}

export default SomeComponent
```
