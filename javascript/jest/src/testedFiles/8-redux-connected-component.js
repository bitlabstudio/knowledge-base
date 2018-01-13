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
