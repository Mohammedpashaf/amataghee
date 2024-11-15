import React, { useState } from "react";
import { default as dianthus, default as Portrait } from '../assets/img/dianthus.png';
import left from '../assets/img/icon/arrow-left.png';
import right from '../assets/img/icon/arrow-right.png';
import omlet from '../assets/img/omlet.png';
import IconComponent from './common/IconComponent';
const ReviewsSectionc = () => {
  const fruits = [
    { image: omlet},
    { image: dianthus },
    { image: Portrait },
    { image: dianthus },
    { image: omlet },
    { image: Portrait },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 >= fruits.length ? 0 : prevIndex + 4
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 < 0 ? fruits.length - 4 : prevIndex - 4
    );
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`
            }}
          >
            {fruits.map((fruit) => (
              <div
                key={fruit.id}
                className="w-full md:w-2/6 p-4 flex-shrink-0"
                role="group"
                aria-label={`Fruit card for ${fruit.title}`}
              >
                <div className="bg-white rounded-lg p-2 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <figure class="dark:bg-slate-800">
                    <img class="sm:h-48 m:w-64 object-fill object-center" src={fruit.image} alt="name"/>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 text-gray-800 focus:outline-none focus:ring-2"
          aria-label="Previous slides"
        >
          <IconComponent img={left} className='w-6 h-6' alt='left'></IconComponent>
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 text-gray-800  focus:outline-none focus:ring-2"
          aria-label="Next slides"
        >
          <IconComponent img={right} className='w-6 h-6' alt='right'></IconComponent>
        </button>
      </div>
    </div>
  );
};

export default ReviewsSectionc;
