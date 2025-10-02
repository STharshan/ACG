import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Clutches and gearbox repairs",
    desc: `Reliable Clutches and gearbox repair to keep you safe`,
    image: "/a1.webp",
    path: "/services/mechanical",
  },
  {
    title: "MOT",
  desc: `Fast, hassle-free MOT testing to keep you road-legal and safe.`,
    image: "/a3.webp",
    path: "/services/service",
  },
  {
    title: "Servicing",
   desc: `Full car servicing to keep your vehicle running smoothly and efficiently.`,
    image: "/a5.webp",
    path: "/services/mot",
  },
  {
    title: "Advanced diagnostics",
   desc: `Professional Advanced diagnostics to keep your car compliant.`,
    image: "/a4.webp",
    path: "/services/wheel-alignment",
  },
    {
    title: "Any mechanical & electrical work",
   desc: `Any mechanical & electrical work to keep your vehicle running smoothly and efficiently. `,
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
