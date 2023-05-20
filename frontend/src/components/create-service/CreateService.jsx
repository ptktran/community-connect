import Navbar from "../Navbar"
import { Link } from "react-router-dom"
import UploadPhoto from "../upload-photo/UploadPhoto"
import React, { useState } from  'react'

export default function CreateService() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <Navbar />
        <div className="bg-white rounded-lg sm:w-6/6 md:w-3/6 lg:w-2/6 py-3 px-5 m-auto mt-10 drop-shadow">
          <h1 className="font-sans text-xl font-medium my-2">Create a service for <b>Business Name</b></h1>
          <hr></hr>
          <form className="my-5">
            <h1 className="text-sm">Create a service for your business to start making money 💸</h1>
            <div className="my-3">
              <label for="service"></label>
              <input type="text" className="bg-gray-comps border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block w-full p-2" placeholder="Service name" required/>
            </div>
            <div className="my-3">
              <label for="service-description"></label>
              <textarea type="text" className="bg-gray-comps border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block w-full p-2 h-36" placeholder="Service description" required/>
            </div>

            <div className="flex space-x-3 items-center my-1">
              <h1 className="text-sm">Does your service have one cost or does the cost vary?</h1>
              <div>
                <input
                  type="radio"
                  name="options"
                  value="price"
                  checked={selectedOption === 'price'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="price" className="ml-1 text-sm">One cost</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="options"
                  value="price-range"
                  checked={selectedOption === 'price-range'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="price-range" className="ml-1 text-sm">Cost varies</label>
              </div>
            </div>
            
            {selectedOption === 'price' && (
              <div className="my-1">
                <label for="service" className="text-sm">Cost for your service</label>
                <div className="flex items-center">
                  <span className="text-md mr-1">$</span>
                  <input type="text" className="bg-gray-comps w-10 border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block p-1.5" placeholder="15" required />
                </div>
              </div>
            )}

            {selectedOption === 'price-range' && (
              <div className="my-1">
              <label for="service" className="text-sm">Cost range for your service</label>
              <div className="flex items-center">
                <span className="text-md mr-1">$</span>
                <input type="text" className="bg-gray-comps w-10 border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block p-1.5" placeholder="15" required />
                <span className="text-md mx-1">-</span>
                <input type="text" className="bg-gray-comps w-10 border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block p-1.5" placeholder="20" required />
              </div>
            </div>
            )}
       
            <div className="my-2">
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
        </div>
      </div>
    </>
  )
}