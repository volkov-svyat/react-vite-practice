import React from 'react'
import { Menu } from 'lucide-react';

const navItems = [
  { text: "Home", href: "/" },
  { text: "Works", href: "/works" },
  { text: "About", href: "/about" },
]

const Topbar = () => {
  return (
    <nav className='min-w-screen w-full max-h-32 h-screen dark:bg-[#00113B] bg-white p-4 flex items-center justify-between'>
      <div className="ml-20 mt-4">
        <img src="src/assets/logo.svg" alt="Logo" className="h-32 w-auto "/>
      </div>

      <div className='absolute left-1/2 transform -translate-x-1/2 flex space-x-6'>
        {navItems.map((item) => (
          <a
            key={item.text}
            href={item.href}
            className="dark:text-white text-[#6B6B6B] dark:hover:text-[#FFCC00] hover:text-[#4C40F7] px-6 py-2 rounded-md text-xl font-medium transition-colors duration-200"
          >
            {item.text}
          </a>
        ))}
      </div>

      <div className="mr-24">
        <button className="flex items-center space-x-1 text-lg cursor-pointer font-medium bg-[#4C40F7] px-8 py-5 text-white hover:text-[#FFCC00] hover:bg-[#3e33db] transition-colors duration-200 rounded-xl shadow-2xl shadow-[#4C40F740]">
          Contact Us
        </button>
      </div>

      {/* <div className="mr-4">
        <button className="flex items-center space-x-1 bg-transparent px-4 py-2">
          <Menu size={32} className="text-white hover:text-[#FFCC00] transition-colors duration-200"/>
        </button>
      </div> */}
    </nav>
  )
}

export default Topbar