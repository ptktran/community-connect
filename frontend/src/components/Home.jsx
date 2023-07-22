import Navbar from "./Navbar";
import MiniPost from "./post/MiniPost";
import Profile from "./Profile";
import Landing from "./landing/Landing"
import Loader from "./loader/Loader"
import SignUp from "./signup/SignUp";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser, useAuth } from "@clerk/clerk-react";

const Home = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    document.title = 'CommunityConnect';

    const checkUserExists = async () => {
      if (isSignedIn && user.primaryEmailAddress.emailAddress) {
        try {
          const response = await axios.get(`http://localhost:5000/check-user/${user.primaryEmailAddress.emailAddress}`);
          setUserExists(response.data.exists);
        } catch (error) {
          console.log('Error:', error);
        }
      }
    };

    checkUserExists();
  }, [isSignedIn])

  if (isSignedIn && userExists) {
    return (
      <div className="bg-gray-bg h-full">
        <Navbar />
        <MiniPost />
      </div>
    );
  } else if (isSignedIn && !userExists) {
    return <SignUp />;
  } else {
    return <Landing />;
  }
};

export default Home;