import React from 'react';

import Testimonial, { ITestimonial } from '../molecules/Testimonial';

const testimonials: ITestimonial[] = [
  {
    text: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
    imgSrc: ' https://i.pravatar.cc/300',
    personName: 'Jake Archibald',
    hashtag: '@jakearchie'
  },
  {
    text: 'Just another engaged with your social media accounts by posting regularly yourself',
    imgSrc: 'https://i.pravatar.cc/340',
    personName: 'Miek Rypert',
    hashtag: '@Rypert'
  },
  {
    text: 'Superwith your social media accounts by posting regularly yourself',
    imgSrc: 'https://i.pravatar.cc/400',
    personName: 'Slate Funfun',
    hashtag: '@Funfun'
  }
];

const Testimonials = () => {
  return (
    <section className="flex justify-center items-center">
      {testimonials.map(testimonial => {
        const { text, imgSrc, personName, hashtag } = testimonial;
        return (
          <Testimonial
            text={text}
            imgSrc={imgSrc}
            personName={personName}
            hashtag={hashtag}
          />
        );
      })}
    </section>
  );
};

export default Testimonials;
