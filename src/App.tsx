//import React, { useState } from 'react'
import './App.css'
import ClickSpark from './components/ClickSpark'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Result from './pages/Result'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <ClickSpark
        sparkColor='#000'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/result" element={<Result />}></Route>
          </Routes>
        </Router>
      </ClickSpark>
    </>
  )
}

export default App
