import React from 'react';

export interface ITestimonial {
  readonly text: string;
  readonly imgSrc: string;
  readonly personName: string;
  readonly hashtag: string;
}

const Testimonial = ({ text, imgSrc, personName, hashtag }: ITestimonial) => {
  return (
    <div className="flex items-center justify-center px-5 py-5">
      <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
        <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
          <a href="#" className="block relative">
            <img
              className="mx-auto object-cover h-20 w-20 mask mask-hexagon"
              alt={personName}
              src={imgSrc}
            />
          </a>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
            {text}
          </p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            {personName}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
            {hashtag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
