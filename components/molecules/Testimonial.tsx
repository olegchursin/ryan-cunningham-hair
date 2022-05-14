import React from 'react';

export interface ITestimonial {
  readonly text: string;
  readonly imgSrc: string;
  readonly personName: string;
  readonly hashtag?: string;
}

const Testimonial: React.FC<ITestimonial> = ({
  text,
  imgSrc,
  personName,
  hashtag
}) => {
  const img = (
    <div className="w-full pt-1 text-center pb-5 -mt-20 mx-auto">
      <span className="block relative">
        <img
          className="mx-auto object-cover h-20 w-20 mask mask-hexagon"
          alt={personName}
          src={imgSrc}
        />
      </span>
    </div>
  );

  const textEl = (
    <div className="w-full mb-10">
      <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
        {text}
      </p>
    </div>
  );

  const hashtagEl = (
    <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
      {hashtag}
    </p>
  );

  const nameEl = (
    <div className="w-full">
      <p className="text-md text-indigo-500 font-bold text-center">
        {personName}
      </p>
      {hashtag ? hashtagEl : null}
    </div>
  );

  return (
    <div className="flex items-center justify-center px-8 py-8">
      <div className="w-full mx-auto max-w-prose rounded-lg bg-white dark:bg-gray-800 shadow-lg px-14 pt-14 pb-10 text-gray-800 dark:text-gray-50">
        {img}
        {textEl}
        {nameEl}
      </div>
    </div>
  );
};

export default Testimonial;
