import React from 'react'
import Button from '../testedFiles/7-mock-functions'
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
