import React, { Component } from 'react'

export default class Loader extends Component {
  render() {
    return (
      <>
      <div className="text-center mhy-5">
        <div class="spinner-border my-5" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      </>
    )
  }
}
