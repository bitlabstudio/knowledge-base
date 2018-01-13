import React, { Component } from 'react'

class ButtonState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirm: false,
    }
  }

  confirm = () => this.setState({ confirm: true })

  submit = () => null

  render() {
    return (
      <div>
        {!this.state.confirm && <button onClick={this.confirm}>Submit</button>}
        {this.state.confirm && <button onClick={this.submit}>Really?</button>}
      </div>
    )
  }
}

export default ButtonState
