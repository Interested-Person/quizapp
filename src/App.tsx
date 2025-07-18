import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Result from './pages/Result'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
