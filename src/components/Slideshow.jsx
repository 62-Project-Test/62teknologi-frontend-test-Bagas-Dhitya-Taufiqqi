import React, { useState } from "react";
import { motion } from "framer-motion";

const Slideshow = ({ photos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? photos?.length - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === photos?.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative overflow-hidden w-full rounded-md">
      <motion.div
        className="flex"
        style={{ width: `${photos?.length}00%` }}
        initial={{ x: `-${currentSlide}00%` }}
        animate={{ x: `-${currentSlide}00%` }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        {photos?.map((photo, index) => (
          <div
            key={index}
            className="w-96 h-96 flex-shrink-0"
            style={{ minWidth: "100%", display: "inline-block" }}
          >
            <motion.img
              src={photo}
              width={980}
              className="h-96 mx-24"
              alt={`Slide ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        ))}
      </motion.div>
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white py-2 px-4 rounded-l-lg"
        >
          Previous
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white py-2 px-5 rounded-r-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
