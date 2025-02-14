import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import LatestNews from './Sempalnews.json'

export default class  extends Component {
  render() {
    return (
      <>

      <Navbar/>
      <News/>

      </>
    )
  }
}
