import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent border-b-2 border-red-700">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-4">
        <div className="flex space-x-4 order-2 lg:order-none">
          <a className="text-white hover:border-blue-500 border-b-2 border-transparent" href='#'>Join Us</a>
          <a className="text-white hover:border-blue-500 border-b-2 border-transparent" href='#'>Sponsor Us</a>
        </div>
        <div className="order-1 lg:order-none w-min ml-auto block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-white focus:outline-none right-0`}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg className={`w-6 h-6 ${isOpen ? 'hidden':''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
            <svg className={`${isOpen ? '' : 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-8 order-3 lg:order-none mt-4 lg:mt-0`} id="mobile-menu">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 text-center">
            <li className="hover:border-blue-500 border-b-2 border-transparent"><a className="text-white" href="#">Home</a></li>
            <li className="hover:border-blue-500 border-b-2 border-transparent"><a className="text-white" href="#">Projects</a></li>
            <li className="relative group">
              <a className="text-white hover:border-b-2 border-blue-500" href="#">TimeLine</a>
              <ul className="absolute hidden group-hover:block border-2 border-l-teal-500 bg-transparent text-white p-4 mt-2 space-y-2">
                <li className=""><a href="#">Blogs</a></li>
                <li className=""><a href="#">Our Events</a></li>
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
