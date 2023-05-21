import NavBar from "./Navbar";
import MiniPost from "./post/MiniPost";
import Landing from "./landing/Landing"
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
<<<<<<< HEAD
    return (
        <div>
            <NavBar />
            <MiniPost />
=======
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    document.title = 'CommunityConnect'
  }, [])

  return (
    <>
      {isAuthenticated ? (
        <div className="bg-gray-bg min-h-full pb-10">
          <NavBar />
          <MiniPost />
>>>>>>> main
        </div>
      ) : (
        <Landing />
      )}
    </>
  )
}

export default Home;