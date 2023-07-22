import Navbar from "../Navbar";
import MiniPost from "../post/MiniPost";
import Landing from '../landing/Landing'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth, useUser } from "@clerk/clerk-react"

export default function Profile() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const { user } = useUser();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    document.title = 'Profile';

    if (!user) {
      navigate('/');
    }

    const getUser = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        try {
          const { data } = await axios.get(`http://localhost:5000/find-user/${user.primaryEmailAddress.emailAddress}`);
          if (data) {
            setUserData(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    getUser();
  }, [isSignedIn]);
  console.log(isSignedIn)
  return (
    <>
      <div className="bg-gray-200 h-full w-full">
      <Navbar />
      {(userData && isSignedIn) && (
        <div className="flex m-auto py-10 justify-center space-x-6">
        <div className="bg-white w-1/6 h-fit drop-shadow rounded-lg">
          <div className="bg-gray-comps p-3 rounded-t-lg font-medium">
            {userData[0].account.charAt(0).toUpperCase() + userData[0].account.slice(1)} Account
          </div>
          <div className="py-6 px-5">
            <img className="w-32 rounded-full m-auto mb-6" src={user.imageUrl}></img>
                <h1 className="font-semibold bg-gray-comps rounded-md p-2">General</h1>
                <p className="text-sm leading-7"><span className="font-medium">Name</span> <span className="font-light">{user.fullName}</span></p>
                <p className="text-sm leading-7"><span className="font-medium">Location</span> <span className="font-light">{userData[0].location}</span></p>
                <p className="text-sm leading-7"><span className="font-medium">Occupation</span> <span className="font-light">{userData[0].occupation}</span></p>
                <p className="text-sm leading-7"><span className="font-medium">Services</span> <span className="font-light">{userData[0].services}</span></p>
 
                  
              <h1 className="font-semibold bg-gray-comps rounded-md p-2 mt-6">Contact</h1>              
              <p className="text-sm leading-7"><span className="font-medium">Email</span> <span className="font-light">{user.primaryEmailAddress.emailAddress}</span></p>
          </div>
        </div>
        
        <div className="w-2/6">
          <div className="bg-gray-comps p-3 rounded-lg font-medium">
            Posts
          </div>
          <MiniPost />  
        </div>
      </div>
      )}
      </div>
    </>
  )
}