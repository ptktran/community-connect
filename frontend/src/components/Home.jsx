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
        <div className="bg-gray-bg min-h-full pb-10">
            <NavBar />
            <Profile />
            <MiniPost />
        </div>
    )
}

export default Home;