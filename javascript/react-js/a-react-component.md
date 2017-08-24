# Javascript > ReactJS > A React Component

Lean more about [component lifecycle functions](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle).

A typical react component should look like this:

```js
import React, { Component } from 'react'  // <-- first import React
import PropTypes from 'prop-types' // <-- then import 3rd party modules

import something from './somewhere.js' // <-- then import own modules

class ComponentName extends Component {
  // First we define the propTypes
  static propTypes = {
    mandatoryProp: PropTypes.bool.isRequired,
    optionalProp: PropTypes.string,
  }

  // Then we define the defaultProps, if any
  static defaultProps = {
    optionalProp: ''
  }

  // Next comes the constructor, if needed
  constructor(props) {
    super(props)
    this.state = { someState: true }
  }

  // After the constructor we implement lifecycle methods
  componentWillMount() { }
  // render() happens now
  // now the DOM is available:
  componentDidMount() { }
  // after mounting, these will happen when props or state change:
  componentWillReceiveProps(nextProps) { }
  // this one is rarely needed:
  shouldComponentUpdate(nextProps, nextState) { }
  componentWillUpdate(nextProps, nextState) { }
  // render() happens now
  componentDidUpdate(prevProps, prevState) { }

  // now implement all other kind of functions and handlers that are needed,
  // ordered by alphabet

  // if your render function calls sub-render functions, implement them here
  // right above the main-render function

  // last comes the main render() function
  render() {
    return (
      <div>
        Component markup here.
      </div>
    )
  }
}

```
