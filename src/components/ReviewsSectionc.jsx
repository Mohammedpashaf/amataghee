import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import r1 from '../assets/img/r1.png';
import r2 from '../assets/img/r2.png';
import r3 from '../assets/img/r3.png';
import r4 from '../assets/img/r4.png';
import ContentComponent from './common/ContentComponent';
import TitleComponent from './common/TitleComponent';
import ReviewsSectionc from './ReviewsSectionc';

const ReviewsSection = () => {
  const getReviewsSectionData = {
    title: 'Testimonials',
    content: 'Customer Stories',
   }
  const fruits = [
    {
      id: 1,
      rating: 5,
      title: "Fresh Strawberries",
      description: "Sweet and juicy strawberries packed with vitamin C and antioxidants.",
      image: r1,
      personName: 'Yasmin Blackburn', productManager: 'Product Manager' 
    },
    {
      id: 2,
      rating: 5,
      title: "Tropical Mangoes",
      description: "Deliciously sweet mangoes rich in vitamins A and C, perfect for smoothies.",
      image: r2,
      personName: 'Yasmin Blackburn', productManager: 'Product Manager' 
    },
    {
      id: 3,
      rating: 5,
      title: "Organic Blueberries",
      description: "Antioxidant-rich blueberries that support brain health and immunity.",
      image: r3,
      personName: 'Yasmin Blackburn', productManager: 'Product Manager' 
    },
    {
      id: 4,
      rating: 5,
      title: "Ripe Bananas",
      description: "Energy-packed bananas full of potassium and natural sweetness.",
      image: r4,
      personName: 'Yasmin Blackburn', productManager: 'Product Manager' 
    },
    {
      id: 5,
      rating: 5,
      title: "Fresh Oranges",
      description: "Citrus-rich oranges bursting with vitamin C and refreshing flavor.",
      image: r4,
      personName: 'Yasmin Blackburn', productManager: 'Product Manager' 
    },
    {
      id: 6,
      rating: 5,
      title: "Dragon Fruit",
      description: "Exotic dragon fruit with unique taste and powerful antioxidants.",
      image: r3,
      personName: 'Yasmin Blackburn', productManager: 'Product Manager' 
    }
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

  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='mb-6'>
        <TitleComponent data={getReviewsSectionData}></TitleComponent>
        <ContentComponent data={getReviewsSectionData}></ContentComponent>
      </div>
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
                className="w-full md:w-1/4 p-4 flex-shrink-0"
                role="group"
                aria-label={`Fruit card for ${fruit.title}`}
              >
                <div className="bg-white rounded-lg p-6 shadow-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105">
                  <StarRating rating={fruit.rating} />
                  <div className="flex items-center justify-between mb-4 mt-4">
                    <h3 className="text-lg font-semibold">{fruit.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{fruit.description}</p>
                  <figure class="ruby rounded-xl p-8 md:p-0 dark:bg-slate-800">
                    <img class="h-20 w-20 rounded-full" src={fruit.image} />
                    <figcaption class="text-base p-5">
                        <div class="text-sky-500 dark:text-sky-400">{fruit.personName}</div>
                        <div class="text-slate-700 dark:text-slate-500">{fruit.productManager}</div>
                        </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
          aria-label="Previous slides"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
          aria-label="Next slides"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
      <ReviewsSectionc></ReviewsSectionc>
    </div>
  );
};

export default ReviewsSection;
