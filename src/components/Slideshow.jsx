import React, { useState } from "react";

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
    <div className="relative">
      {photos?.length > 0 && (
        <>
          <img
            src={photos[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="object-cover w-full h-64 rounded-lg"
          />
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
            <button
              onClick={goToPrevious}
              className="bg-gray-800 text-white py-2 px-4 rounded-l-lg"
            >
              Previous
            </button>
            <button
              onClick={goToNext}
              className="bg-gray-800 text-white py-2 px-4 rounded-r-lg"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
