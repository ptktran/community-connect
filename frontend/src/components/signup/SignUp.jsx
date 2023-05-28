import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([])
  const { user, isAuthenticated, isLoading } = useAuth0()

  useEffect(() => {
    const checkUserExists = async () => {
      if (isAuthenticated && user.email) {
        try {
          const response = await axios.get(`http://localhost:5000/find-user/${user.email}`);
          setUserInfo(response.data);
        } catch (error) {
          console.log('Error: ', error);
        }
      }
    };
    checkUserExists();
  }, []);

  console.log(userInfo)
  useEffect(() => {
    if (userInfo.length > 0) {
      navigate('/');
    } else {
      navigate('/signup');
    }
  }, []);

  const [formData, setFormData] = useState({
    age: null,
    account: '',
    occupation: '',
    location: '',
    services: ''
  })
  console.log(formData)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({...formData, [name]: value})
  }
  
  const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        if (isAuthenticated) {
          const payload = {
            name: user.name,
            email: user.email, 
            age: formData.age,
            account: formData.account,
            occupation: formData.occupation, 
            location: formData.location
          }
          const { data } = await axios.post('http://localhost:5000/User/new', payload);
          navigate('/');
        }
      } catch(error) {
        console.log(error.message);
      }
    }

  return(
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <div className="flex justify-center mt-20 mb-10">
          {(isAuthenticated && user.name) ? (
            <h2 className="inter font-bold text-3xl">Tell us more about yourself, <span className="hover:text-blue">{user.name}</span></h2>
          ) : (
            <h2 className="inter font-bold text-3xl">Tell us more about <span className="hover:text-blue">yourself</span></h2>
          )}
        </div>
        
        <div className="flex flex-col justify-end items-center">
          <div className="w-fit leading-10">
            <div>
              <input 
                type="radio" 
                name="account" 
                value="freelancer" 
                checked={formData.account === 'freelancer'}
                onChange={handleInputChange}
                className="mr-3"
                required/>
              <label htmlFor="freelancer" className="text-lg">🧑🏻 Are you a freelancer?</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="business" 
                name="account" 
                value="business" 
                checked={formData.account === 'business'}
                onChange={handleInputChange}
                className="mr-3"/>
              <label htmlFor="business" className="text-lg">💼 Are you a business?</label>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-10 h-full">
            <div className="flex flex-col w-1/4">
                <input 
                  className="mb-5 focus:outline-none bg-gray-comps p-3 rounded-lg" 
                  name="age"
                  type="number"
                  onChange={handleInputChange}
                  placeholder="Age"/> 
                <input 
                  className="mb-5 focus:outline-none bg-gray-comps p-3 rounded-lg" 
                  name="occupation"
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Occupation"/> 
                <input 
                  className="mb-5 focus:outline-none bg-gray-comps p-3 rounded-lg" 
                  name="location"
                  type="text" 
                  onChange={handleInputChange}
                  placeholder="City, State/Country"/> 
                <input 
                  className="mb-5 focus:outline-none bg-gray-comps pb-44 px-3 rounded-lg h-60" 
                  name="services"
                  type="text" 
                  onChange={handleInputChange}
                  placeholder="Services offered"/> 
            </div>
        </div>
        
        <div className="flex justify-center items-center mt-5">
          <button type='submit' className="bg-blue hover:bg-blue/90 w-1/6 rounded-lg p-2 text-neutral-50 font-bold ease duration-150">Next</button>
        </div>
      </div>
    </form>
  )}


export default SignUp