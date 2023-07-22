import { useState } from 'react'
import AddPost from './components/add-post/AddPost'
import Landing from './components/landing/Landing'
import Profile from './components/profile/Profile'
import SignUp from './components/signup/SignUp'
import Businesses from './components/businesses/Businesses'
import CreateService from './components/create-service/CreateService'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClerkProvider, useAuth } from '@clerk/clerk-react'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}
      appearance={{
        variables: {
          colorPrimary: "#1877F2"
        }
      }}
    >
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/add-post' element={ <AddPost /> } />
            <Route path='/profile' element={ <Profile /> } />
            <Route path='/businesses' element={ <Businesses />} />
            <Route path='/create-service' element={ <CreateService /> } />
            <Route path='/signup' element={ <SignUp/>} />
          </Routes>
        </Router>
      </div>
    </ClerkProvider>
  )
}

export default App
