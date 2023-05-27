import Navbar from "../Navbar";
import MiniPost from "../post/MiniPost";
import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
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
              <img className="w-32 rounded-full m-auto mb-6" src='src/assets/icons/user.svg'></img>
                  <h1 className="font-semibold bg-gray-comps rounded-md p-2">General</h1>
                  <p className="text-sm leading-7"><span className="font-medium">Name</span> <span className="font-light">{user.name}</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Location</span> <span className="font-light">San Francisco, CA</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Date joined</span> <span className="font-light">March 21, 2023</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Occupation</span> <span className="font-light">Self-employed</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Services</span> <span className="font-light">1</span></p>
   
                    
                <h1 className="font-semibold bg-gray-comps rounded-md p-2 mt-6">Contact</h1>              
                  <p className="text-sm leading-7"><span className="font-medium">Phone</span> <span className="font-light">931-1252-4299</span></p>
                  <p className="text-sm leading-7"><span className="font-medium">Email</span> <span className="font-light">{user.email}</span></p>
            </div>
          </div>
          
          <div className="w-2/6">
            <div className="bg-gray-comps p-3 rounded-lg font-medium">
              Posts
            </div>
            <MiniPost />  
          </div>
          
        </div>
      </div>
    </>
  )
}