import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div className="flex transition-transform ease-out duration-300">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <img
                src={slide}
                alt=""
                className="object-cover w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-75 focus:outline-none"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-75 focus:outline-none"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom--0 flex justify-center space-x-2 mt-5">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-20 h-20 cursor-pointer ${
              index === currentSlide ? "border-gray-900" : ""
            }`}
          >
            <img
              src={slide}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
