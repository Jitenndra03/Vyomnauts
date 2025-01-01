import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`bg-transparent border-b-2 border-red-700`}>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex space-x-4">
          <a className=" text-white hover:border-blue-500 border-b-2 border-transparent" href='#'>Join Us</a>
          <a className=" text-white hover:border-blue-500 border-b-2 border-transparent" href='#'>Sponsor Us</a>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-8`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0">
            <li className="hover:border-blue-500 border-b-2 border-transparent"><a className="text-white" href="#">Home</a></li>
            <li className="hover:border-blue-500 border-b-2 border-transparent"><a className="text-white" href="#">Projects</a></li>
            <li className="relative group">
              <a className="text-white hover:border-b-2 border-blue-500" href="#">TimeLine</a>
              <ul className="absolute hidden group-hover:block bg-transparent text-white p-4 mt-2 space-y-2">
                <li className="hover:bg-gray-200"><a href="#">Blogs</a></li>
                <li className="hover:bg-gray-200"><a href="#">Our Events</a></li>
              </ul>
            </li>
            <li className="hover:border-b-2 border-blue-500"><a className="text-white" href="#">About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
