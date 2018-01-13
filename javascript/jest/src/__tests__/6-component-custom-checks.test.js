import React from 'react'
import ButtonState from '../testedFiles/6-component-custom-checks'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('ButtonState', () => {
  it('switches over when clicked', () => {
    const wrapper = mount(<ButtonState />)
    let button = wrapper.find('button')
    expect(button.text()).toBe('Submit')
    button.simulate('click')
    button = wrapper.find('button')
    expect(button.text()).toBe('Really?')
  })
})
