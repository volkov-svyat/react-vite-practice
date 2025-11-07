import React from 'react'

const satisfactionPoints = [
    { text:"Provide idea support from our creative team" },
    { text:"Provide attractive and professional design services" },
    { text:"Support for service 24 hours a week" },
    { text:"Helping our customers to grow their business" },
    { text:"Provide support to market products through online marketplace" }
]

const satisfactionCards = [
    {i:1, big_text:"70K+", text:"We have more than customers", color:"#4C40F7", color_dark:"#FFFFFF"},
    {i:2, big_text:"100+", text:"Projects we have completed", color:"#FF6800", color_dark:"#FF6800"},
    {i:3, big_text:"10M+", text:"People who are helped because of our hard work", color:"#FF2D59", color_dark:"#FF2D59"},
    {i:4, big_text:"200+", text:"Support from world-renowned companies", color:"#4ADB61", color_dark:"#4ADB61"}
]

const CustomerSatisfaction = () => {
  return (
     <nav className="align-top bg-[#F9F9FD] dark:bg-[#020E2D] h-400">
        <div class="text-right" className='mt-10 absolute right-1/4 absolute-left-1/4 transform py-0 translate-x-1/2 translate-y-1/6 flex space-x-6 text-left font-bold text-7xl leading-snug min-h-0 min-w-0'>
            <div className="flex flex-col w-full min-h-0 min-w-0">
                <span className="text-[#111029] dark:text-white">Customer<br/></span>
                <span className="text-[#111029] dark:text-white">satisfaction is<br/></span>
                <span className="text-[#111029] dark:text-white">our first priority<br/></span>
                <span className="text-left text-3xl font-light flex-initial py-12 text-[#6B6B6B] dark:text-white">
                    We serve many customers, ranging from small<br/>businesses, medium entrepreneurs, to world-<br/>renowned companies. Their satisfaction is our<br/>pleasure. We strive to provide the best service by:
                </span>
                <ul className="text-left text-3xl font-light flex-initial py-12 text-[#6B6B6B] dark:text-white">
                    {satisfactionPoints.map((item) => (
                        <li
                            key={item.text}
                            className="flex py-4 -mx-4 text-pretty w-220"
                        >
                            <img src="src/assets/Checkmark.svg" className="w-10 h-10 rounded-full mx-6 text-[#4C40F7] dark:text-white bg-transparent">
                            </img>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div class="text-left" className='mt-10 absolute left-1/4 absolute-right-1/4 transform py-0 -translate-x-1/2 translate-y-1/6 flex space-x-6 text-left font-bold text-7xl leading-snug min-h-0 min-w-0'>
            <div className="grid grid-rows-2 grid-cols-2 justify-self-center mt-8">
                {satisfactionCards.map((item) => (
                    <div
                        key={item.text}
                        className={"flex flex-col justify-center text-center py-2 mx-7 px-8 rounded-2xl h-108 w-96 bg-white dark:bg-[#4C40F7]"}
                        style={item.i % 2 ? {marginTop: 75} : {marginTop: 0}}
                    >
                        <span className={`font-bold text-7xl py-4`} style={{color_dark: item.color_dark, color: item.color}}>{item.big_text}</span>
                        <span className="font-light text-3xl dark:text-white text-[#111029] text-wrap px-8">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    </nav>
  )
}

export default CustomerSatisfaction