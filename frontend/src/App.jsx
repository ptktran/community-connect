import { useState } from 'react'
// import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className='App'>
      <LoginPage />
    </div>
  )
}

export default App
