import Navbar from "../Navbar"
import { Link } from "react-router-dom"
import UploadPhoto from "../upload-photo/UploadPhoto"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from  'react'
import { useAuth, useUser } from "@clerk/clerk-react";

export default function CreateService() {
  useEffect(() => {
    document.title = 'Create a service'; // Set the desired title
  }, []);

  const { isSignedIn } = useAuth()
  const navigate = useNavigate()
  const { user } = useUser()
  const [ isSubmitted, setIsSubmitted ] = useState(false)

  const defaultAuthor = {
    name: 'Anonymous',
    email: 'anonymous@email.com',
  };
  
  const [formData, setFormData] = useState({
    author: user ? { name: user.fullName, email: user.primaryEmailAddress.emailAddress } : defaultAuthor,
    title: '',
    location: '',
    date: '',
    description: '',
    image: '',
    min_price: 0,
    max_price: 0,
    likes: 0,
    comments: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const currentDate = new Date().toUTCString();
    const formDataWithDate = {
      ...formData,
      date: currentDate,
    };
  
    try {
      const response = await fetch('http://localhost:5000/Post/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithDate),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);
        setIsSubmitted(true)
        document.getElementById('serviceForm').reset()
      } else {
        console.log('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <div className="bg-gray-200 h-screen">
        <Navbar />
        <div className="bg-white rounded-lg sm:w-6/6 md:w-3/6 lg:w-2/6 py-6 px-5 m-auto mt-10 drop-shadow">
          <h1 className="font-sans text-xl font-medium my-2">Create a service for <b>{user.fullName}</b></h1>
          <hr></hr>
          <form className="my-5" onSubmit={handleSubmit} id="serviceForm">
            <h1 className="text-sm">Create a service for your business to start making money 💸</h1>
            <div className="my-3">
              <label htmlFor="service"></label>
              <input 
                type="text" 
                name="title" 
                onChange={handleChange}
                className="bg-gray-comps border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block w-full p-2" 
                placeholder="Service name" required/>
            </div>
            <div className="my-3">
              <label htmlFor="service_description"></label>
              <textarea 
                type="text" 
                name="description" 
                onChange={handleChange}
                className="bg-gray-comps border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block w-full p-2 h-36" 
                placeholder="Service description" required/>
            </div>

              <div className="my-3">
              <label htmlFor="service" className="text-sm">Cost range for your service</label>
              <div className="flex items-center">
                <span className="text-md mr-1">$</span>
                <input 
                  type="text" 
                  name="min_price" 
                  onChange={handleChange}
                  className="bg-gray-comps w-10 border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block p-1.5" 
                  placeholder="15" required />
                <span className="text-md mx-1">-</span>
                <input 
                  type="text" 
                  name="max_price"
                  onChange={handleChange}
                  className="bg-gray-comps w-10 border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block p-1.5" 
                  placeholder="20" required />
              </div>
            </div>
       
            <div className="my-3">
              <h1 className="text-sm">Add a profile image for your business <b>(optional)</b></h1>
              <UploadPhoto />
            </div>
              
            <div className="flex items-center justify-end space-x-3 mt-5">
              <Link to="/">
                <button className="bg-gray-comps w-16 border p-2 rounded-lg text-sm hover:bg-gray-hover transition-color ease duration-150">Cancel</button>
              </Link>
              <button type="submit" className="bg-blue w-16 border border-blue p-2 rounded-lg text-sm text-white hover:bg-blue/90 transition-color ease duration-150">Create</button>
            </div>
          </form>
          {isSubmitted && (
            <>
              <h1 className="text-sm text-green-600">Service created successfully!</h1>
              <Link to="/"><a className="text-sm hover:text-gray-text transition-color ease duration-150 underline">Return to home to see your new service</a></Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}