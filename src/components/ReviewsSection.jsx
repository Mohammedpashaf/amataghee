import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import r1 from '../assets/img/r1.png';
import r2 from '../assets/img/r2.png';
import r3 from '../assets/img/r3.png';
import r4 from '../assets/img/r4.png';
import TitleComponent from './common/TitleComponent';
import ContentComponent from './common/ContentComponent';
import navigation from '../assets/img/Navigation.png'
const getReviewsSectionData = {
  title: 'Testimonials',
  content: 'Customer Stories',
 }
const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchedReviews = [
      { id: 1, img: r1, name: 'Very good support and system', rating: 5, comment: 'Nulla pharetra diam sit amet nisl suscipit. Nulla malesuada pellentesque elit eget gravida cum. Vivamus arcu bibendum!', personName: 'Yasmin Blackburn', productManager: 'Product Manager' },
      { id: 2, img: r2, name: 'A team of experts who listen ', rating: 5, comment: 'Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Suspendisse interdum consectetur libero id faucibus', personName: 'Javan Weiss', productManager: 'Product Manager'  },
      { id: 3, img: r3, name: 'Great people and good vacation time', rating: 3, comment: 'Ut ornare lectus sit amet placerat in egestas. Accumsan in nisl nisi scelerisque ultrices. At lectus urna duis convallis convallis!', personName: 'Mary Locus', productManager: 'Product Manager' },
      { id: 4, img: r4, name: 'Very good support and system', rating: 5, comment: 'Ut ornare lectus sit amet placerat in egestas. Accumsan in nisl nisi scelerisque ultrices. At lectus urna duis convallis convallis!', personName: 'Phillip Patton', productManager: 'Product Manager' },
    ];
    setReviews(fetchedReviews);
  }, []);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500"
            tabIndex="0"
          >
            <StarRating rating={review.rating} />
            <div className="flex items-center justify-between mb-4 mt-4">
              <h3 className="text-lg font-semibold">{review.name}</h3>
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <figure class="ruby rounded-xl p-8 md:p-0 dark:bg-slate-800">
              <img class="h-20 w-20 rounded-full" src={review.img} />
              <figcaption class="text-base p-5">
                  <div class="text-sky-500 dark:text-sky-400">{review.personName}</div>
                  <div class="text-slate-700 dark:text-slate-500">{review.productManager}</div>
                  </figcaption>
            </figure>
          </div>
        ))}
      </div>
      <img class="my-8 rounded-none" src={navigation} />
    </div>
  );
};

export default ReviewsSection;
