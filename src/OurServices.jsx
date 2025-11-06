import React from 'react'
import { ArrowRight } from 'lucide-react';
const itemCards = [
    { title:"Ideate", description:"We provide services with the best designs than our designer team for your business", image:"src/assets/Flame.svg", image_bg:"#FFFFFF", selected: true},
    { title:"Design", description:"We provide services with the best designs than our designer team for your business", image:"src/assets/Pen.svg", image_bg:"#FF2D59"},
    { title:"Web Development", description:"We help develop company websites to be more professional and attractive", image:"src/assets/Desktop.svg", image_bg:"#4ADB61"},
    { title:"App Development", description:"We help develop company mobile apps to be more professional and attractive", image:"src/assets/Desktop.svg", image_bg:"#FFCC00"},
    { title:"Business Growth", description:"We also provide services by providing input for your business growth", image:"src/assets/Desktop.svg", image_bg:"#007BFF"},
    { title:"Digital Marketing", description:"We also help you market your products through an online marketplace", image:"src/assets/Chart.svg", image_bg:"#FF6800"},
]

const OurServices = () => {
  return (
    <nav className="align-top -mt-12 bg-[url(src/assets/Vector1.svg)] bg-top bg-cover bg-repeat sticky">
       <div className='text-center'>
            <div className="flex flex-col w-full font-semibold text-3xl leading-snug">
                <span className="text-[#FF2D59] dark:text-[#FFCC00] py-2 font-bold">Our services<br/></span>
                <span className="text-[#111029] dark:text-white text-6xl">The various services we provide to make your<br/>business more powerful<br/></span>
            </div>  
        </div>
        <div className="grid grid-rows-3 grid-cols-3 justify-self-center py-24">
            {itemCards.map((item) => (
                <div
                    key={item.title}
                    className={item.selected ? "flex flex-col justify-center text-center py-4 px-8 rounded-2xl h-128 min-w-100 max-w-100 w-full bg-linear-to-tr from-[#4C40F7] to-[#4C40F7] dark:from-[#4C40F7] dark:to-[#4C40F7] mx-1.25 my-1.25 drop-shadow-[#4C40F7] dark:drop-shadow-[#4C40F7] drop-shadow-2xl"  : "flex flex-col justify-center text-center py-4 px-8 rounded-2xl h-128 min-w-100 max-w-100 w-full bg-linear-to-tr from-[#f7f7f7] to-[#ffffff] dark:from-[#001342] dark:to-[#00164d] mx-1.25 my-1.25 drop-shadow-[#e0e0e0] dark:drop-shadow-[#001855] drop-shadow-2xl" }
                >
                    <img src={item.image} className="w-24 h-24 p-6 rounded-full mx-30 py-4 my-6 text-[#4C40F7] dark:text-white" style={{ backgroundColor: item.image_bg, color: item.selected==true ? "#4C40F7" : "FFFFFF"}}>
                    </img>
                    <span className={item.selected ? "font-medium text-2xl py-4 dark:text-white text-white" : "font-medium text-2xl py-4 dark:text-white"}>{item.title}</span>
                    <span className={item.selected ? `font-light text-2xl dark:text-white text-white` : `font-light text-2xl dark:text-white`}>{item.description}</span>
                    <button className="cursor-pointer rounded-full py-3 bg-[#DBDEE166] w-21 hover:bg-[#FFFFFF] mx-32 my-8 dark:bg-[#020E2D] dark:hover:bg-[#FFFFFF] transition-colors duration-200 pointer-events-none">
                        <ArrowRight size={64} className="pl-4 dark:text-white hover:text-[#4C40F7] dark:hover:text-[#4C40F7] transition-colors duration-200 flex pointer-events-auto"/>
                    </button>
                </div>
            ))}
        </div>
    </nav>
  )
}

export default OurServices