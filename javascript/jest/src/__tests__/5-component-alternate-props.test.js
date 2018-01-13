import React from 'react'
import renderer from 'react-test-renderer'

import TestComponent from '../testedFiles/5-component-alternate-props'

describe('TestCompont', () => {
  it('renders the correct title', () => {
    const component = renderer.create(<TestComponent title='Foobar' />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a different title', () => {
    const component = renderer.create(<TestComponent title='Different Title' />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
