import { motion } from "framer-motion";
import React from "react";

const Work = () => {
  return (

    <div className="w-full min-h-[200vh] p-2 pt-32 px-5 ">
      <h3 className="text-sm  mb-4 md:hidden flex items-center gap-3">
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
        Featured Projects
      </h3>
      <h1 className="text-7xl md:text-[17vw] md:px-36 overflow-hidden">
        <motion.span
         initial={{ translateY: "40%", rotate: 20, opacity:0 }}
              whileInView={{ translateY: 0, rotate: 0 ,opacity:1 }}
              transition={{ ease: [0.22,1,0.36,1], duration: 0.8 }}
              viewport={{ once: true }}
              className=" inline-block  origin-left"
        >Work</motion.span>
      </h1>
      <p className=" mt-5 sm:hidden">
        Highlights of cases that we passionately built with forward-thinking
        clients and friends over the years.
      </p>
      <div className="top md:flex md:px-20 justify-between">
        <div className="relative left  mt-5 w-[90vw] sm:w-[38vw] md:ml-16 md:mt-10 overflow-hidden ">
          <motion.img
           initial={{opacity:1}}
           whileHover={{opacity:0}}
           data-scroll data-scroll-speed="-.5"
            className=" hidden  sm:block  sm:absolute   w-full h-full object-cover sm:z-[2] "
            src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
            alt=""
          />
          <video
            playsInline
            autoPlay
            muted
            loop
            className="object-cover block sm:absolute  sm:left-0 sm:top-0 w-full h-full sm:z-[1]"
            src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
          ></video>
        </div>
        <div className="right md:w-[35%]">
          <div className="para3 ">
            <h3 className="hidden  md:flex items-center gap-3">
              <span>
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
              Featured Projects
            </h3>
            <p className="hidden md:block md:text-3xl md:mt-10">
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </p>
            <h1 className="px-3 mt-5 sm:hidden">Columbia Pictures</h1>
            <h2 className="px-3 sm:hidden text-zinc-500">
              Celebrating a Century of Cinema
            </h2>
            <div className="imgVid2 relative w-[90vw] md:mt-[70%] sm:h-[90vh] overflow-hidden  sm:w-[30vw] ">
              <motion.img
              initial={{opacity:1}}
              whileHover={{opacity:0}}
               data-scroll data-scroll-speed="-.5"
                className="  mt-5  hidden  sm:block  sm:absolute sm:top-0 sm:left-0   w-full h-full object-cover sm:z-[2] "
                src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />

              <video 
                playsInline
                autoPlay
                muted
                loop
                className="object-cover  mt-5 sm:relative left-0 top-0 w-full h-full "
                src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
              ></video>
            </div>
            {/* <h1 className="px-3 mt-5 sm:hidden">Columbia Pictures</h1>
            <h2 className="px-3 sm:hidden text-zinc-500">
              Celebrating a Century of Cinema
            </h2> */}
          </div>
        </div>
      </div>

      <div className="bottom sm:flex justify-evenly w-[90%]  h-[100vh] sm:mt-[10%]  ">
        <div className="left  ">
          <h1 className="px-3 mt-5 sm:hidden">Rino & Pelle</h1>
          <h2 className="px-3 sm:hidden mb-5 text-zinc-500">
            Effortless chic\ lifestyle
          </h2>
          <div className=" w-full h-full  md:mt-[40vw] sm:h-[50vh]  sm:w-[60%] sm:ml-[14vw] overflow-hidden relative">
            <motion.img 
               initial={{opacity:1}}
               whileHover={{opacity:0}}
           
              className="object-cover hidden sm:block w-full h-full relative sm:z-[2]" 
              src="https://images.unsplash.com/photo-1721296356675-dcc2ea491a72?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <video
              playsInline
              autoPlay
              muted
              loop
              className="object-cover block absolute z-[1] left-0 top-0 w-full h-full "
              src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
            ></video>
          </div>
        </div>
        <div className="right md:w-[35%]">
          <div className="para4 ">
            <h1 className="px-3 mt-5 sm:hidden">Aebele Interiors</h1>
            <h2 className="px-3 sm:hidden text-zinc-500">
              Luxurious design experience
            </h2>
            <div className="imgVid2 w-[90vw] sm:w-[35vw]  overflow-hidden  relative">
              <motion.img data-scroll data-scroll-speed="-.2"
              initial={{opacity:1}}
              whileHover={{opacity:0}}
                className=" hidden sm:block w-full h-full sm:absolute sm:z-[2]"
                src="https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
              <video 
                playsInline
                autoPlay
                muted
                loop
                className=" object-cover block relative left-0 top-0 w-full h-full z-[1]"
                src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
