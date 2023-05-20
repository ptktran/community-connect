import { useEffect } from "react"
import LoginButton from "../LoginButton"

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
        <div>
          <div className="my-5">
            <h1 className="text-2xl font-semibold">Log In or Sign Up</h1>
            <p>Start connecting by logging in or creating an account</p>
          </div>
          <LoginButton buttonText="Let's go →" css="bg-blue text-white w-full p-2.5 rounded-lg hover:bg-blue/90 transition-color ease duration-150"/>
        </div>
      </div>
    </div>
  )
}