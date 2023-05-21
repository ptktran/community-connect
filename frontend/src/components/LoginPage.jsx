import NavBar from "./Navbar";
import MiniPost from "./post/MiniPost";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import axios from "axios";

import { useAuth0 } from "@auth0/auth0-react";


const LoginPage = () => {


    const { getAccessTokenSilently } = useAuth0();

    const handleAPITest = async () => {

        try {

            const token = await getAccessTokenSilently();
            const { data } = await axios.get('http://localhost:5000/test', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            console.log(data);

        } catch(error) {

            console.log(error.message);
            
        }

    }
  
    return (
        <>
        <button onClick={handleAPITest}> API TEST </button>
        <LoginButton />
        <LogoutButton />
        <Profile />
        </>

      )
}

export default LoginPage;