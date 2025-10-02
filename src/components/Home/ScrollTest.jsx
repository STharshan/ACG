import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      "i came came for ambient lighting to get done on my ‘13 fiesta, thought it would be tricky to get the lights fitted into the panels as the gaps were small, nonetheless came out really well and he’s did a solid job, looks natural and was done in efficient time, for the price too can’t go wrong. i reccomend highly",
    author: "Shabbir miah",
  },
  {
    quote:
      "100% recommend if your wanting work done to your car, done an EGR delete + stage 1 eco map, service and works were on point 👌",
    author: "Aman Javid",
  },
  {
    quote: "Lovely work. Im very hapoy with the work. Wicked job. Had stage 1 engine remap and starlights on my sq7. Something you can see on the page .",
    author: "Yadger",
  },
  {
    quote:
      "Had My Car Stage 1 Remapped Alongside a Gearbox Map With Crackles Great Service And Very Happy With Results I would Highly Recommend 👌👍",
    author: "Exotix YT",
  },
];

const ScrollingTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-overlay py-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white text-black dark:bg-black dark:text-white p-6 rounded shadow-md"
          >
            {/* Quote */}
            <p className="text-sm mb-4">"{t.quote}"</p>

            {/* Author */}
            <p className="font-bold text-sm uppercase">
              {t.author}
            </p>

            {/* Source */}
            <p className="text-xs">Google Reviews</p>
          </div>
        ))}
      </div>

      {/* Scrolling Animation */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
