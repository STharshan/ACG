import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="bg-white dark:bg-black px-4 py-16 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-center mt-15 items-center">
        {/* Left Side (Centered Content) */}
        <div data-aos="fade-right" data-aos-delay="100" className="text-center md:text-left">
          {/* Subtitle */}
          <div className="mb-4 flex items-center justify-center space-x-2">
            <span className="w-6 h-px bg-primary rotate-135 mt-3"></span>
            <span className="text-black dark:text-white uppercase text-sm tracking-widest font-bold">
              Raving Reviews
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug text-black dark:text-white">
            THOUSANDS OF <br /> HAPPY DRIVERS
          </h2>

          {/* Rating Box */}
          <div className="flex justify-center md:justify-start">
            <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-5 py-2 rounded-full bg-light dark:bg-dark transition-colors">
              {/* Stars */}
              <div className="flex text-rating text-sm space-x-1">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              {/* Score */}
              <span className="text-light dark:text-dark text-sm">4.7/5 from</span>
              {/* Review count */}
              <span className="px-3 py-1 rounded-full text-light dark:text-dark text-xs">
                84+ Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
