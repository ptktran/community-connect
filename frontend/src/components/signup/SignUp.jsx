import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth, useUser } from '@clerk/clerk-react'
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState([])
  const { isSignedIn } = useAuth()
  const { user } = useUser()
  const [coords, setCoords] = useState(null)

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
  
  async function getCoords() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => resolve(position.coords),
          error => reject(error)
        );
      } else {
        reject(new Error("Geolocation is not supported."));
      }
    });
  }
  
  async function getLocation(latitude, longitude) {
    const response = await fetch(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`);
    const data = await response.json(); 
    return `${data.address.city}, ${data.address.state}`
  }

  const handleLocation = async () => {
    try {
      const position = await getCoords();
      setCoords(position);
  
      const city = await getLocation(position.latitude, position.longitude);
      setFormData({ ...formData, location: city });
    } catch (error) {
      console.error('Error getting coordinates:', error);
    }
  }

  const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        if (isSignedIn) {
          const payload = {
            name: user.fullName,
            email: user.primaryEmailAddress.emailAddress, 
            age: formData.age,
            account: formData.account,
            occupation: formData.occupation, 
            location: formData.location,
            services: formData.services
          }
          const { data } = await axios.post('http://localhost:5000/User/new', payload);
          console.log('reached api');
          window.location.reload()
        }
      } catch(error) {
        console.log(error.message);
      }
    }

  return(
    <form onSubmit={handleSubmit}>
      <div className="wrapper">
        <div className="flex justify-center mt-20 mb-10">
          {(isSignedIn && user.fullName) && (
            <h2 className="inter font-bold text-3xl cursor-default">Tell us more about yourself, <span className="hover:text-blue">{user.fullName}</span></h2>
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
            <div className="flex flex-col w-2/4">
              <div className="mb-5 items-center w-full flex space-x-4">
                <input 
                  className="focus:outline-none bg-gray-comps p-3 rounded-lg w-3/4 border-gray-text border" 
                  name="location"
                  type="text"
                  value={formData.location} 
                  onChange={handleInputChange}
                  placeholder="Your neighborhood" disabled/> 
                <button onClick={handleLocation} className="bg-blue hover:bg-blue/90 rounded-lg w-1/4 p-3 text-white font-bold ease duration-150">Get location</button>
              </div>
              <input 
                className="mb-5 focus:outline-none bg-gray-comps p-3 rounded-lg border-gray-text border" 
                name="age"
                type="number"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Age" required/> 
              <input 
                className="mb-5 focus:outline-none bg-gray-comps p-3 rounded-lg border-gray-text border" 
                name="occupation"
                type="text"
                value={formData.occupation}
                onChange={handleInputChange}
                placeholder="Occupation" required/> 
              <input 
                className="mb-5 focus:outline-none bg-gray-comps pb-44 px-3 rounded-lg h-60 border-gray-text border" 
                name="services"
                type="text"
                value={formData.services} 
                onChange={handleInputChange}
                placeholder="Services offered"/> 
            </div>
        </div>
        
        <div className="flex justify-center items-center mt-5">
          <button type='submit' className="bg-blue hover:bg-blue/90 w-1/6 rounded-lg p-3 font-bold text-neutral-50 ease duration-150">Let's go <span className="font-light">➜</span></button>
        </div>
      </div>
    </form>
  )}


export default SignUp