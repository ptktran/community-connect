import { React, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


const LoginButton = ({ buttonText, css}) => {
  const { loginWithRedirect } = useAuth0();


<<<<<<< HEAD

  return <button onClick={loginWithRedirect}>Log In</button>;
=======
  return <button onClick={() => loginWithRedirect()} className={css}>{buttonText}</button>;
>>>>>>> main
};

export default LoginButton;
