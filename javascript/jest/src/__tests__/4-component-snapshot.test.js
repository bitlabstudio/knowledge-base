import React from 'react'
import renderer from 'react-test-renderer'

import TestComponent from '../testedFiles/4-component-snapshot'

describe('TestComponent', () => {
  it('renders the correct values', () => {
    const component = renderer.create(<TestComponent />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
