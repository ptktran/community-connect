import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    // <body className="bg-gray-200 h-screen">
      <nav className="bg-white py-2 px-4 w-full flex justify-between items-center">
        <div className="flex items-center justify-between md:w-1/6">
          <a href="/" className="flex items-center text-lg">
            <img src="src\assets\icons\logo.svg" className="mr-1"></img>
            <span className="font-bold">Community</span>Connect
          </a>
        </div>
        
        {/* Search Bar */}
        <form className="lg:w-3/6 md:w-2/6"> 
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative lg:w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" className="w-5 h-5 text-gray-text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg></div>
              <input type="text" className="bg-gray-comps text-gray-text text-sm rounded-3xl focus:outline-none focus:bg-white focus:border-gray-text border w-full pl-10 p-2" placeholder="Search" required />
            </div>
              {/* <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white hover:bg-gray-comps transition-colors ease rounded-lg border focus:outline-none">
                <svg class="w-5 h-5" fill="none" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
              </button> */}
        </form>

        {/* Nav Links */}
        <ul className="flex justify-end items-center space-x-3">
          <li><a href="#"><button className="bg-gray-comps p-2 rounded-lg hover:bg-gray-hover transition-color ease duration-150">💸 Create service</button></a></li>
          <li><a href="#"><img className="hover:bg-gray-hover transition-color ease duration-150 p-2 rounded-lg" src="src/assets/icons/add.svg" alt="Add"></img></a></li>
          <li><a href="#"><img className="hover:bg-gray-hover transition-color ease duration-150 p-2 rounded-lg" src="src/assets/icons/message.svg" alt="Message"></img></a></li>
          <li><a href="#"><img className="hover:bg-gray-hover transition-color ease duration-150 p-2 rounded-lg" src="src/assets/icons/notification.svg" alt="Notification"></img></a></li>
          <li><a href="#" className="flex space-x-1 bg-gray-comps p-2 rounded-lg hover:bg-gray-hover transition-color ease duration-150"><img src="src/assets/icons/user.svg" alt="User"></img><span>Peter Tran</span></a></li>
        </ul>
      </nav>    
    // </body>  
  )
}

export default Navbar;