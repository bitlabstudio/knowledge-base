import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TestComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          assumenda consequuntur distinctio enim eos excepturi expedita fugiat
          impedit iure natus necessitatibus nemo nulla perferendis quia quis
          saepe, totam ut vel!
        </p>
      </div>
    )
  }
}

export default TestComponent
