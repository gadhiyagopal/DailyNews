import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { titel , desc } = this.props
    return (
      <>
      <div className="header">
        <h1>{titel}</h1>
        <p>{desc}</p>
      </div>
      </>
    )
  }
}
