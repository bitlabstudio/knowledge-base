import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    parameter: PropTypes.number.isRequired,
  }

  handleClick = () => {
    // calculate something
    this.props.onClick(this.props.parameter)
  }

  render() {
    return <button onClick={this.handleClick}>Click Me!</button>
  }
}

export default Button
