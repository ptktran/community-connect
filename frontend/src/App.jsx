import { useState } from 'react'
// import Navbar from './components/Navbar'
import AddPost from './components/add-post/AddPost'
import SignUp from './components/signup/SignUp'
import CreateService from './components/create-service/CreateService'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>  
      <Router>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/add-post' element={ <AddPost /> } />
          <Route path='/signup' element={ <SignUp/>} />
          <Route path='/create-service' element={ <CreateService /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
