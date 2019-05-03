import React, { Component } from 'react'

class Field extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
        this.handleChanger = this.handleChanger.bind(this)
    }

    handleChanger(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChanger} value={this.state.value} />
            </div>
        )
    }
}

export default Field