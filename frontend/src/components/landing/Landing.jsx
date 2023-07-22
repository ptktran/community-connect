import { useEffect } from "react"
import { SignIn } from "@clerk/clerk-react"
// import firebase from 'firebase/app'
// import 'firebase/auth'

export default function Landing() {
  return (
    <div className="flex min-h-full w-full">
      <div className="w-1/2 h-screen flex items-center justify-center bg-gray-comps">
        <div>
          <div className="flex items-center select-none">
            <img src="src\assets\icons\logo.svg" className="mr-2 w-10"></img>
            <h1 className="text-2xl"><span className="font-bold">Community</span>Connect</h1>
          </div>
          <p>Strengthening communities, one service at a time :)</p>
          <div className="mt-3 text-gray-text leading-10">
            <p>🔨 Create and promote services that you offer</p>
            <p>💬 Connect with local businesses and your community</p>
            <p>💸 Earn money and gain more exposure</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-screen bg-white flex justify-center items-center">
          <SignIn 
            variables={{
              colorPrimary: 'blue'
            }}
          />
      </div>
    </div>
  )
}