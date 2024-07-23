import { motion } from 'framer-motion'
import React from 'react'

const News = () => {
  
  return (
    <div className='w-full h-[50vh] sm:h-[80vh] bg-white sm:mt-96'>
         <h3 className="text- w-full  mb-10 flex justify-center  gap-3 h-fit items-center">
        <span className="">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
        </span>
        In the media
      </h3>
      <div className='w-full flex justify-center'>
      <h1 className='w-[90%] sm:[50%] text-7xl sm:text-[10vw] px-10 text-center leading-none'>
        {["Spread","the News"].map((item,index)=> {
          return <motion.span key={index}
         initial={{ translateY: "40%", rotate: 20, opacity:0 }}
              whileInView={{ translateY: 0, rotate: 0 ,opacity:1 }}
              transition={{ ease: [0.22,1,0.36,1], duration: 0.8 }}
              viewport={{ once: true }}
               className=" inline-block  origin-left"
        >{item}</motion.span>
        })}
      </h1>
      </div>
      
    

      <p className='text-xl sm:text-3xl font-light w-full sm:px-96 px-20 text-center mt-10'>Find out more about our work on these leading design and technology platforms.</p>
    </div>
  )
}

export default News