import React from 'react'
import space from "/video-6.mp4"

const Footer = () => {
  return (
    <div className='overflow-hidden'>
<div data-scroll data-scroll-speed="-0.3"  className='w-full h-[70vh] sm:h-[110vh] bg-black relative'>
       <div className="background absolute overflow-hidden">
        <video autoPlay muted loop className='w-full ml-32 mt-5 sm:ml-[30vw] pointer-events-none ' src={space}></video>
       </div>
        <div className="div-container p-10 sm:p-40 absolute ">
            <div className="div-title text-7xl sm:text-[10vw] text-[#E0CCBB] ">
                <h1>Our</h1>
                <h1>Story</h1>

                <p className='text-xl text-[#B5A698] mt-10 sm:text-3xl w-full sm:w-[50%]'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
                <h1 className='text-xl underline text-[#B5A698] mt-5 sm:hidden'>Our Story</h1>
            </div>
            <div className='w-[99%] mt-10 h-[1px] bg-[#B5A698] sm:absolute  '></div>

           <div className='flex item-center justify-between px-10 sm:pt-32'>
            <div className="left">
            {["Work","Studio","News", "Contact"].map((item,index)=> {
            return (
                <div key={index} className='flex flex-wrap w-full ]'>
                    <h1 className='text-xl text-[#B5A698] mt-5 cursor-pointer'>{item}</h1>
                </div>
            )
           })}
            </div>
            <div className="right">
            <div className="left">
            {["Behance", "Dribbble", "Twitter", "Instagram"].map((item,index)=> {
            return (
                <div key={index} className='flex flex-wrap w-full]'>
                    <h1 className='text-xl text-[#B5A698] mt-5 cursor-pointer'>{item}</h1>
                </div>
            )
           })}
            </div>
            </div>
           </div>

        </div>
    </div>
    </div>
    
  )
}

export default Footer