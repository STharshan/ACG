import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      "I rang Tom at very short notice after a puncture in my front left tyre just before a trip away. He was extremely helpful and my car was in the garage, on the lift and the issue fixed within the hour.",
    author: "Marc Williams",
  },
  {
    quote:
      "Tom and his colleague were both incredibly welcome and offered unmatched and efficient service at a fraction of the cost I'd been quoted previously for similar jobs.",
    author: "Aman Javid",
  },
  {
    quote: "ACG Autocentre are also sponsors of a local non-league football team, in which I have an interest, and it's great to see the mutual support between two, Nottingham-based businesses. Would have no hesitancy in visiting again and highly recommend!",
    author: "Yadger",
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
