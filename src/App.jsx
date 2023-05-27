import { useState } from 'react'
// import Navbar from './components/Navbar'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
    </div>
  )
}

export default App