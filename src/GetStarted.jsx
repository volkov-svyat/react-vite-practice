import React from 'react'
import { ArrowRight } from 'lucide-react';

const GetStarted = () => {
  return (
    <nav class="flow-root py-10">
        <div class="text-left" className='absolute left-118 absolute-right-110 transform py-16 -translate-x-1/2 flex space-x-6 text-left font-bold text-7xl leading-snug'>
            <div className="flex flex-col w-full">
                <span className="text-[#111029] dark:text-white">Make your business<br/></span>
                <span className="text-[#FF6800] dark:text-[#FFCC00]">more powerful<br/></span>
                <span className="text-[#111029] dark:text-white">with us<br/></span>
                <span className="text-left text-3xl font-light flex-initial py-12 text-[#6B6B6B] dark:text-white">
                    We provide various services to make<br/>your business grow and get bigger. Your<br/>satisfaction is our first priority.
                    </span>
                <button className="max-w-60 flex items-center space-x-1 text-xl cursor-pointer font-medium bg-[#4C40F7] pl-12 pr-0 py-3 text-white hover:text-[#FFCC00] hover:bg-[#3e33db] transition-colors duration-200 rounded-xl shadow-2xl shadow-[#4C40F740]">
                    Get Started
                    <ArrowRight size={48} className="pl-4"/>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default GetStarted