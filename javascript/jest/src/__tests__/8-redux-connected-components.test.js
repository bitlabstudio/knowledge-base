import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import TestComponent from '../testedFiles/8-redux-connected-component'

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
