import NavBar from "./Navbar";
import MiniPost from "./post/MiniPost";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import React, { useState, useEffect } from "react";

const Home = () => {
    useEffect(() => {
      document.title = 'CommunityConnect'
    }, [])

  return (
    <>
    {isAuthenticated ? (
      <div className="bg-gray-bg h-screen pb-10">
        <NavBar />
        <MiniPost />
      </div>
    ) : (
      <Landing />
    )}
    </>)
}
export default Home;