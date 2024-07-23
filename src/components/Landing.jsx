import React from "react";
import bg from "/bg.webp";
import { FaArrowDown } from "react-icons/fa6";
import { motion,stagger } from "framer-motion";
import { Power4 } from "gsap/all";

const Landing = () => {
  return (
    <div className="relative w-full h-[180vh] md:h-[240vh]">
      <div className=" picture w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1" className="w-full h-full object-cover" src={bg} alt="" />
      </div>

      <div className="absolute top-0 h-full px-5 sm:px-10 text max-w-screen-2xl mx-auto text-white ">
        <div className="para mt-[55vh] md:px-20 w-[70%] sm:w-[70%]">

          {["Global digital design studio partnering with","brands and businesses that create exceptional","experiences where people live, work, and unwind."].map((item,index) =>{
            return <p key={index} className="text-[4.7vw] md:text-3xl overflow-hidden">
            {" "}
            <motion.span
              initial={{ translateY: "40%", rotate: 20, opacity:0 }}
              animate={{ translateY: 0, rotate: 0 ,opacity:1 }}
              transition={{ ease: [0.22,1,0.36,1], duration: 0.8, delay: index*.2 }}
              className=" inline-block  origin-left"
            >
              {item}
            </motion.span>
          </p>
          })
          }
           
        </div>
        <div className="heading  md:px-10 text-6xl my-10 sm:text-9xl md:text-[18vw] mt-5 sm:mt-20  tracking-tight">

          
          {["Digital", "Design","Experience"].map((item,index)=>{
            return <h1 key={index} className="overflow-hidden py-3">
            <motion.span initial={{ translateY: "40%", rotate: 20, opacity:0 }}
              animate={{ translateY: -20, rotate: 0 ,opacity:1 }}
              transition={{ ease: Power4.easeInOut, duration: 1,  delay: 1+index*.2 }}
              className=" inline-block  origin-left">{item}</motion.span>
          </h1>
          })}
          
          
          
          <span className="text-xl mb-5 inline-block  sm:hidden">
            <FaArrowDown />
          </span>
        </div>

        <div className="para2 md:px-20 md:w-[70%] mt-10">
          <p className="text-[4.7vw] md:text-3xl">
            {" "}
            We help experience-driven thrive{" "}
          </p>
          <p className="text-[4.7vw] md:text-3xl">
            {" "}
            by making their audience feel the refined
          </p>
          <p className="text-[4.7vw] md:text-3xl">
            {" "}
            intricacies of their brand and product in the
          </p>
          <p className="text-[4.7vw] md:text-3xl">
            {" "}
            digital space. Unforgettable journeys start with a click
          </p>
        </div>
        <a
          className="mt-10 inline-block underline md:px-20 md:text-xl relative"
          href=""
        >
          <span className="w-4 h-4 left-12 top-2 rounded-full border-2 border-slate-500 hidden md:block absolute"></span>
          The Studio
        </a>
        <div className="rightNav  ml-[70%] flex ">
          <div className="links hidden md:block gap-10 text-white">
            {["Work", "Studio", "News", "Content"].map((item, index) => (
              <a key={index} className="text-lg font-light flex mt-4">
                {item}
              </a>
            ))}
          </div>
          <div className="ml-36 mt-5 hidden md:block">
            <h1>hello@exoape.com</h1>
            <h1>+31 772 086 200</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
