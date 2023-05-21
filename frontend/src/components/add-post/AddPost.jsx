import Navbar from "../Navbar";
import UploadPhoto from "../upload-photo/UploadPhoto";
import { Link } from "react-router-dom"
import React, { useEffect } from 'react'

export default function AddPost() {
  useEffect(() => {
    document.title = 'Create a post'
  }, []);
  return (
    <>
      <div className="bg-gray-200 h-screen">
        <Navbar />
        <div className="bg-white rounded-lg sm:w-6/6 md:w-3/6 lg:w-2/6 py-3 px-5 m-auto mt-10 drop-shadow">
          <h1 className="font-sans text-xl font-medium my-2">Create a post</h1>
          <hr></hr>
          <form className="my-5">
            <h1 className="text-sm">Posting as <b>Username</b></h1>
            <div className="my-3">
              <label for="title"></label>
              <input type="text" className="bg-gray-comps border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block w-full p-2" placeholder="Title" required/>
            </div>
            <div className="my-3">
              <label for="title"></label>
              <textarea type="text" className="bg-gray-comps border text-gray-text text-sm rounded-lg focus:outline-none focus:border-gray-text block w-full p-2 h-36" placeholder="Description" required/>
            </div>
            <h1 className="text-sm">Add an image <b>(optional)</b></h1>
            <UploadPhoto />
            <div className="flex items-center justify-end space-x-3 mt-5">
              <Link to="/">
                <button className="bg-gray-comps w-16 border p-2 rounded-lg text-sm hover:bg-gray-hover transition-color ease duration-150">Cancel</button>
              </Link>
              <button type="submit" className="bg-blue w-16 border border-blue p-2 rounded-lg text-sm text-white hover:bg-blue/90 transition-color ease duration-150">Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}