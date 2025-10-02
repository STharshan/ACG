import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out",
      once: true, // animate only once
      mirror: false, // do not repeat on scroll up
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* Logo Title */}
        <div className="flex items-center" data-aos="fade-down" data-aos-delay="100">
          <h1 className="text-5xl md:text-6xl font-bold tracking-widest mt-35 lg:ml-17 md:ml-17 lg:max-w-xl">
            WELCOME TO
          </h1>
        </div>

        {/* Prestige */}
        <p className="text-5xl md:text-6xl font-bold leading-tight tracking-wide mt-5 mb-4 "
           data-aos="fade-up" data-aos-delay="200">
          ACG
        </p>

        {/* Group */}
        <p className="text-3xl md:text-3xl uppercase font-extrabold tracking-widest relative inline-block pb-2"
           data-aos="fade-up" data-aos-delay="300">
          <span className="relative z-10 max-w-2xl text-primary">Auto Centre</span>
        </p>

        {/* Sub Text */}
        <p className="mt-5 text-xl sm:text-xl text-white max-w-sm" data-aos="fade-up" data-aos-delay="400">
          Dealer level service at a fraction of the cost
        </p>

        {/* CTA Button */}
        <button className="mt-6 bg-primary text-dark cursor-pointer font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition group"
                data-aos="zoom-in" data-aos-delay="500">
          <span className="transition-transform duration-300 group-hover:-translate-x-2">
            GET A QUOTE
          </span>
          <FaArrowRight className="text-dark transition-transform duration-300 group-hover:translate-x-2" />
        </button>

        {/* Badge Row */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm mb-15" data-aos="fade-up" data-aos-delay="600">
          <div className="flex items-center gap-2 font-semibold px-3 py-1 rounded bg-white/10 backdrop-blur-sm">
            <FaArrowRight className="bg-primary text-dark w-5 h-5 p-1 rounded-full" /> Fast Service
          </div>
          <div className="flex items-center gap-2 font-semibold px-3 py-1 rounded bg-white/10 backdrop-blur-sm">
            <FaArrowRight className="bg-primary text-dark w-5 h-5 p-1 rounded-full" /> Quality Care
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
     <div className="absolute left-0 w-full z-10 border-t bg-black  border-gray-700" data-aos="fade-up" data-aos-delay="700">
        <div className="mx-auto backdrop-blur-sm flex flex-col sm:flex-row items-center justify-center px-6 py-3 text-white text-sm font-semibold shadow-lg">
          {/* Rating Section */}
          <div className="flex items-center gap-3 dark:bg-black border border-gray-600 px-4 py-2 rounded-full order-1 sm:order-2 mb-3 sm:mb-0">
            {/* Stars */}
            <div className="flex text-yellow-400 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            {/* Rating Text */}
            <span className="text-white text-sm font-medium">4.7/5 from</span>
            {/* Reviews Badge */}
            <span className="bg-secondary border border-gray-600 px-3 py-1 rounded-full text-white text-xs font-medium">
              84+ Reviews
            </span>
          </div>

          {/* TRC Logo */}
          {/* <div className="flex items-center order-2 sm:order-1">
            <img
              src="trc.png"
              alt="TRC Logo"
              className="w-42 h-20 object-contain md:w-40 md:h-20"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
