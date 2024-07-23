import gsap, { Power4, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const PlayReel = () => {

  const parent = useRef(null);
  const videodiv = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);
 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub:1
      }
    })
    tl.to(videodiv.current,{
      
      width:"105%",
      height:"105%",
      ease: Power4

    },"a")
    tl.to(play.current,{
       x:"100%"
    },"a")
    tl.to(reel.current,{
      x:"-100%"
   },"a")

   
  })
  


  return (
    <div ref={parent} className='relative w-full h-full mt-96 bg-black text-white flex items-center justify-center overflow-hidden'>
    <div ref={videodiv} className='w-48 sm:w-[30vw] aspect-video bg-red-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 sm:-translate-y-1/2 sm:-translate-x-1/2'>

    <video autoPlay muted loop className='w-full h-full object-cover scale-1.2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://player.vimeo.com/progressive_redirect/playback/724832427/rendition/1080p/file.mp4?loc=external&log_user=0&signature=0ed44a0255edf7f44c0925e951a269426f3f4eb5a6c46f83df7da03d07e795aa"></video>

    </div>
    <div className='absolute overlay w-full h-full flex flex-col justify-between py-20'>

    <div className='flex items-center gap-2 justify-center py-10'>
    <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 text-white"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1>Work in Motion</h1>
    </div>

    <h1 className='w-full  flex justify-center items-center gap-42 text-6xl sm:text-9xl md:gap-[60%] -translate-y-1/2'>
      <div ref={play}>Play</div>
      <div ref={reel}>Reel</div>
    </h1>

<div className='flex justify-center'>
<p className='w-[68%] text-center text-sm '>Our work is best experienced in motion. Don't forget to put on your headphones.</p>

</div>
    

    </div>

   

    </div>
  )
}

export default PlayReel