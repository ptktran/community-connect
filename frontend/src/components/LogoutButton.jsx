import React, { useState } from "react";
// import { useAuth } from "../auth/AuthContext"
import { useNavigate, Link } from  'react-router-dom'
import { useClerk, useAuth } from "@clerk/clerk-react";

const LogoutButton = () => {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const logOut = () => {
    signOut()
    navigate('/')
  }
  
  return (
    <Link to='/'>
      <button onClick={logOut} className="bg-red-500 text-sm text-white p-2.5 rounded-lg hover:bg-red-500/90 transition-color ease duration-150">
        Log Out
      </button>
    </Link>
  );
};

export default LogoutButton;