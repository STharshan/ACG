import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Clutches and gearbox repairs",
    //desc: `Peak Performance Centre use only Original Equipment Specification parts and work with the Care and Attention your car deserves. We offer the Highest Quality Customer Service and will treat your vehicle as if it were our own. Leave the workshop with your car feeling brand new. You’ll be amazed by the difference our Dealer Level Service will make.`,
    image: "/a1.webp",
    path: "/services/mechanical",
  },
  {
    title: "MOT",
  // desc: `EALER LEVEL DIAGNOSTICS You’re a Busy Person — don’t let vehicle problems get in your way. Peak Performance Centre have the Specialist Equipment, Training and Experience to Locate and Repair your fault First Time. `,
    image: "/a3.webp",
    path: "/services/service",
  },
  {
    title: "Servicing",
   // desc: `Unlock your cars true potential with a Performance Software package that suits both you and your vehicle. With more Brake Horsepower and an increase in Torque, your vehicle will drive like new and you'll be surprised by the level of improvements gained. `,
    image: "/a5.webp",
    path: "/services/mot",
  },
  {
    title: "Advanced diagnostics",
   // desc: `For a long time the word DPF has been synonymous with every diesel drivers worst nightmare... NOT ANY MORE!!! `,
    image: "/a4.webp",
    path: "/services/wheel-alignment",
  },
    {
    title: "Any mechanical & electrical work",
   // desc: `Your vehicle's Timing Belt unfortunately comes with a limited life expectancy which should Never go unanswered. The Cost of Repairs if it were to fail can surmount to Thousands of pounds worth of Engine Damage. Don't Leave it to Chance! Drop in or Call us for Advice on Replacement Interval Guidelines. `,
    image: "/a2.webp",
    path: "/services/wheel-alignment",
  }
  
];

const ServiceSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-25 px-4 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-7xl mb-20 mx-auto relative">
        {/* Section Title */}
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-2 uppercase"
          data-aos="fade-down"
        >
          Our Services
        </h2>
        <p
          className="text-center text-black dark:text-white text-lg mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          From minor fixes to major repairs, we’ve got you covered.
        </p>

        <div className="relative overflow-hidden">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20
              bg-black/50 dark:bg-white/20 hover:bg-primary dark:hover:bg-primary
              text-white dark:text-white p-3 rounded-full shadow-md
              transition-colors duration-300 group"
            aria-label="Scroll Left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <FaArrowLeft
              size={20}
              className="transition-transform duration-300 group-hover:-translate-x-2"
            />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20
              bg-black/50 dark:bg-white/20 hover:bg-primary dark:hover:bg-primary
              text-white dark:text-white p-3 rounded-full shadow-md
              transition-colors duration-300 group"
            aria-label="Scroll Right"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <FaArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>

          {/* Scrollable Service Cards */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth px-10 py-20 scrollbar-hide"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="relative min-w-[300px] md:min-w-[400px] h-[420px] rounded-lg shadow-lg border-primary border
             hover:shadow-primary hover:border-primary/80 overflow-hidden group flex-shrink-0 border-primary hover:border-primary/80
             hover:scale-105 active:scale-105 bg-white hover:shadow-primary border-primary hover:border-primary/80 dark:bg-black/90 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150} // staggered animation for each card
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/image.png"; // fallback logo
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-overlay dark:bg-overlay/70 hover:bg-overlay/60 dark:hover:bg-overlay/50 transition-all duration-300"></div>

                {/* Text */}
                <div className="absolute bottom-0 p-5 z-10">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white mb-4">{service.desc}</p>
                  <Link to={service.path}>
                    <button className="mt-auto px-4 py-2 text-xs border border-light rounded-full font-semibold cursor-pointer
                      bg-overlay dark:bg-overlay/30 hover:bg-primary dark:hover:bg-primary
                      text-primary dark:text-primary hover:text-dark transition-all duration-300"
                    >
                      <FaArrowRight className="inline mr-2" />
                      EXPLORE
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
