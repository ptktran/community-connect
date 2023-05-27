import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const SignUp = () => {

  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [isFreelancer, setIsFreelancer] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);
  const [serviceOffered, setServiceOffered] = useState();

  const handleSignUp = async () => {
      try {

        if (isAuthenticated) {
          const payload = {
            name: name,
            email: user.email,
            isFreelancer: isFreelancer,
            isBusiness: isBusiness,
            location: location,
          }

          const { data } = await axios.post('http://localhost:5000/User/new', payload);
          navigate('/');
        }

      } catch(error) {
        console.log(error.message);
      }
  }

  return(
    <form>
      <div className="wrapper">
        <div className="flex justify-center mt-20 mb-10">
            <h2 className="inter font-bold text-[45px]">Tell us more about <span className="hover:text-blue">yourself</span></h2>
        </div>
        
        <div className="flex flex-nowrap justify-center items-center mb-5">
            <p className="mr-5 text-[20px]">🧑🏻‍💻 Are you a freelancer?</p>
            <input type="checkbox" value="freelancer" checked={isFreelancer} onChange={(e) => setIsFreelancer(e.target.checked)} />
        </div>

        <div className="flex flex-nowrap justify-center items-center">
            <p className="mr-5 text-[20px]">💼 Are you a business?</p>
            <input type="checkbox" value="business" checked={isBusiness} onChange={(e) => setIsBusiness(e.target.checked)} />
        </div>
        <div className="flex flex-wrap justify-center items-center mt-10 h-full">
            <div className="flex flex-col w-1/4">
                <input className="mb-5 focus:outline-none bg-gray-200 p-3 rounded-lg" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required/> 
                <input className="mb-5 focus:outline-none bg-gray-200 p-3 rounded-lg" type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required/> 
                <input className="mb-5 focus:outline-none bg-gray-200 pb-44 px-3 rounded-lg h-60" type="text" placeholder="Services offered" onChange={(e) => setServiceOffered(e.target.value)}/> 
            </div>
        </div>
        
        <div className="flex justify-center items-center mt-5">
          <button className="bg-blue w-1/6 rounded-lg p-2" type="button" onClick={handleSignUp}>
              <p className="text-neutral-50 font-bold">Next</p>
          </button>
        </div>
      </div>
    </form>
  )}

export default SignUp