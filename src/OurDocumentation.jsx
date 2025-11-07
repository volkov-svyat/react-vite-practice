import React from 'react'

const OurDocumentation = () => {
  return (
    <nav className="align-top -mt-80">
       <div className='text-center'>
            <div className="flex flex-col w-full font-semibold text-3xl leading-snug">
                <span className="text-[#FF2D59] dark:text-[#FFCC00] py-2 font-bold">Our documentation<br/></span>
                <span className="text-[#111029] dark:text-white text-6xl">See what our profile is like and how we work for your<br/>business</span>
            </div>  
        </div>
        <div className="bg-[url(src/assets/DocsBackground.svg)] bg-top bg-cover bg-no-repeat sticky h-320 mt-24">
            <div className="overflow-hidden h-270 justify-self-center rounded-4xl flex items-center justify-center mt-12">
                <img src="src/assets/DocsImage.jpg" className="w-full h-full object-cover block my-30">
                </img>
            </div>
        </div>
    </nav>
  )
}

export default OurDocumentation