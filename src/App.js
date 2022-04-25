import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
