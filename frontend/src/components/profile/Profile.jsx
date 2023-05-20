import Navbar from "../Navbar";
import MiniPost from "../post/MiniPost";
import React, { useEffect } from 'react'

export default function Profile() {

  useEffect(() => {
    document.title = 'Profile'
  }, []);

  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        <Navbar />
        <div className="flex m-auto py-10 justify-center space-x-6">
          <div className="bg-white w-1/6 h-fit drop-shadow rounded-lg">
            <div className="bg-gray-comps p-3 rounded-t-lg font-medium">
              Business Account
            </div>
            <div className="py-6 px-5">
              <img className="w-32 rounded-full border border-gray-comps m-auto mb-6" src='https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif'></img>
                  <h1 className="font-semibold bg-gray-comps rounded-md p-2">General</h1>
                  <p className="text-sm leading-7"><span className="font-medium">Name</span> <span className="font-light">Peter Tran</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Location</span> <span className="font-light">Toronto, ON</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Date joined</span> <span className="font-light">March 15, 2021</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Occupation</span> <span className="font-light">Student</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Services</span> <span className="font-light">2</span></p>
   
                    
                <h1 className="font-semibold bg-gray-comps rounded-md p-2 mt-6">Contact</h1>              
                  <p className="text-sm leading-7"><span className="font-medium">Phone</span> <span className="font-light">416-803-8510</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Email</span> <span className="font-light">petertran@xyz.com</span></p>
            </div>
          </div>
          
          <div className="w-2/6">
            <div className="bg-gray-comps p-3 rounded-lg font-medium">
              Services
            </div>
            <MiniPost />  
          </div>
          
        </div>
      </div>
    </>
  )
}