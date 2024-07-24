import React, { useEffect, useRef } from "react";
import diesel from "/diesel.mp4";
import gsap, { Power4, ScrollTrigger } from "gsap/all";

const Images = () => {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "0 20",
        scrub: 1,
      },
    });

    tl.to(
      first.current,
      {
        x: "50%",
        ease: Power4,
      },
      "a"
    );
    tl.to(
      second.current,
      {
        x: "-20%",
        ease: Power4,
      },
      "a"
    );
    tl.to(
      third.current,
      {
        x: "-60%",
        ease: Power4,
      },
      "a"
    );
    tl.to(
      fourth.current,
      {
        x: "60%",
        ease: Power4,
      },
      "a"
    );
  });

  return (
    <div
      ref={parent}
      className="w-full h-[70vh] sm:h-[130vh] bg-white flex items-center justify-center"
    >
      <div className="relative w-[40%] h-1/2 sm:h-[64%] sm:w-[25%] bg-red-100">
        <div
          ref={first}
          className="absolute w-24 sm:w-[14vw] h-[8rem] sm:h-[33vh] bg-red-500 -right-1/2 top-6"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={second}
          className="absolute w-40 sm:w-[25vw] h-[6rem] sm:h-[25vh] bg-red-500 -left-28 sm:-left-80 top-1/3"
        >
          <video
            playsInline
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            src={diesel}
          ></video>
        </div>
        <div
          ref={third}
          className="absolute w-32 sm:w-[25vw] h-[7rem] sm:h-[30vh] bg-red-500 -left-[30%] -bottom-20 sm:-bottom-56"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={fourth}
          className="absolute w-32 sm:w-[25vw] h-[10rem] sm:h-[50vh] bg-red-500 -right-[22%] -bottom-[7rem] sm:-bottom-96"
        >
          <video
            playsInline
            autoPlay
            muted
            loop
            className="w-full h-full object-cover "
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>

        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
