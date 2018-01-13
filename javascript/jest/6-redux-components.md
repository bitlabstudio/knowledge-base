# Redux Components

__Note: During our retreat we agreed upon NOT testing the connected components but instead only test the representional component that's wrapped by the redux connect function.  
In case you might encounter any complex scenarios where you want to do it anyway, here's how it goes.__

However one use case, we haven't discussed is that you can use this setup described below to test middlewares as well.  
Also if you have more complex async and chained actions, you can make sure that all actions are actually called by using the mock store's testing API.

Please refer to the official [`redux-mock-store` documentation](http://arnaudbenard.com/redux-mock-store/) for complex test scenarios.


```jsx harmony
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class TestComponentBase extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <h1>
        {this.props.title}
      </h1>
    )
  }
}

const TestComponent = connect(state => ({ title: state.teststore.title }))(
  TestComponentBase,
)

export default TestComponent
```

You can use an actual `Provider` from `react-redux` and then use the `redux-mock-store` package to provide a mock store.

Then you wrap the tested component in your `Provider` and pass the store as you would do with the whole app.


```jsx harmony
import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import TestComponent from '6-redux'

describe('TestComponent', () => {
  const appState = {
    teststore: {
      title: 'My Title',
    },
  }
  let store

  beforeEach(() => {
    store = configureStore()(appState)
  })

  it('renders the correct values', () => {
    const component = renderer.create(
      <Provider store={store}>
        <TestComponent />
      </Provider>,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
```
