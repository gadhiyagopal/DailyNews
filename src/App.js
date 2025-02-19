import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import LatestNews from './Sempalnews.json'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class  extends Component {
  render() {
    return (
      <>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<News key="general" category="general"/>}/>
        <Route path="/business"  element={<News key="business" category="business"/>}/>
        <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}/>
        <Route path="/health" element={<News key="health" category="health"/>}/>
        <Route path="/science" element={<News key="science" category="science"/>}/>
        <Route path="/sports" element={<News key="sports" category="sports"/>}/>
        <Route path="/technology" element={<News key="technology" category="technology"/>}/>
      </Routes>
      </BrowserRouter>

      </>
    )
  }
}
