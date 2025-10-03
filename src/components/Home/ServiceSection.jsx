import React, { useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    desc: `Any mechanical & electrical work to keep your vehicle running smoothly and efficiently.`,
    image: "/a2.webp",
    path: "/services/wheel-alignment",
  }
];

const ServiceSection = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.scrollWidth / services.length;
      
      if (direction === "left") {
        const newIndex = Math.max(0, currentIndex - 1);
        setCurrentIndex(newIndex);
        container.scrollTo({
          left: cardWidth * newIndex,
          behavior: "smooth",
        });
      } else {
        const maxIndex = services.length - 3;
        const newIndex = Math.min(maxIndex, currentIndex + 1);
        setCurrentIndex(newIndex);
        container.scrollTo({
          left: cardWidth * newIndex,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="py-25 px-4 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="absolute left-0 w-full z-10 border-gray-700">
        <div className="mx-auto backdrop-blur-sm flex flex-col sm:flex-row items-center justify-center px-6 py-3 text-white text-sm font-semibold">
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
            <span className="text-sm font-medium text-black dark:text-white">4.7/5 from</span>
            {/* Reviews Badge */}
            <span className="bg-secondary border text-black dark:text-white border-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              84+ Reviews
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mb-20 mt-20 mx-auto relative">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-2 uppercase">
          Our <span className="dark:text-white text-gray-700">Services</span> 
        </h2>
        <p className="text-center text-lg dark:text-white mb-8">
          From minor fixes to major repairs, <br /> we've got you covered.
        </p>

        <div className="relative overflow-hidden">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            disabled={currentIndex === 0}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-20
              bg-black/50 dark:bg-white/20 hover:bg-primary dark:hover:bg-primary
              text-white dark:text-white p-3 rounded-full shadow-md
              transition-colors duration-300 group ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Scroll Left"
          >
            <FaArrowLeft
              size={20}
              className="transition-transform duration-300 group-hover:-translate-x-2"
            />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            disabled={currentIndex >= services.length - 3}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-20
              bg-black/50 dark:bg-white/20 hover:bg-primary dark:hover:bg-primary
              text-white dark:text-white p-3 rounded-full shadow-md
              transition-colors duration-300 group ${currentIndex >= services.length - 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Scroll Right"
          >
            <FaArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>

          {/* Scrollable Service Cards */}
          <div
            ref={scrollRef}
            className="overflow-x-hidden scroll-smooth px-10 py-20"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6" style={{ width: `${(100 / 3) * services.length}%` }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative rounded-lg shadow-lg dark:border-primary dark:border
                    overflow-hidden group flex-shrink-0 border-primary hover:border-primary/80
                    hover:scale-105 active:scale-105 bg-white hover:shadow-primary hover:border-primary/80 
                    dark:bg-black/90 transition-all duration-300"
                  style={{ 
                    width: `calc(${100 / services.length}% - ${(6 * (services.length - 1)) / services.length}px)`,
                    minWidth: '280px',
                    height: '520px'
                  }}
                >
                  {/* Image */}
                  <div className="max-w-sm mx-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-[95%] h-80 mx-auto object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/logo.webp";
                      }}
                    />
                  </div>

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
                        <FaArrowRight className="inline mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                        <span className="transition-transform duration-300 group-hover:translate-x-2">EXPLORE</span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.max(1, services.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.scrollWidth / services.length;
                  scrollRef.current.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth",
                  });
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;