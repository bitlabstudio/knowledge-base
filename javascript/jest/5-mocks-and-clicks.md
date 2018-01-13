# Mocks

If you want to mock out a function call or make sure i.e. an external API call gets triggered without actually triggering it you can use mock functions.

For this scenario we assume we have a button that does some super long calculation, that we don't want to run inside our tests but still see that the button click calls the right function.

```jsx harmony
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    parameter: PropTypes.number.isRequired,
  }

  handleClick = () => {
    // calculate something that takes too long for a test case
    this.props.onClick(this.props.parameter)
  }

  render() {
    return <button onClick={this.handleClick}>Click Me!</button>
  }
}
```

## Clicking buttons

To be able to click buttons, we need to have `enzyme` and `enzyme-adapter-react-16` installed.  
Make sure the enzyme adapter version (here 16) matches your react version.

Enzyme allows us to actually `mount` a component.
Where previously we used the react test renderer to render a component to string or json, we now have something that we can manipulate still.  
So we can for example `simulate` click events on what we've just mounted.

```jsx harmony
const button = mount(<Button parameter={parameter} onClick={onClick} />)
button.simulate('click')
```

## Testing the mock functions

Now putting the button clicks to use, we can incorporate our mock functions to run our actual test.

Our `Button` component takes an `onClick` function prop, that we want to make sure is called.  
To do that we pass the jest `fn` function as `onClick`.  
This `fn` function has some magic params, that we can use in our assertions.

```jsx harmony
import React from 'react'
import Button from './5-mocks'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('ButtonState', () => {
  it('switches over when clicked', () => {
    const onClick = jest.fn()
    const parameter = 1
    const button = mount(<Button parameter={parameter} onClick={onClick} />)
    button.simulate('click')
    expect(onClick).toBeCalled()
    expect(onClick).toBeCalledWith(parameter)
  })
})
```
