import React from 'react';

import Testimonial, { ITestimonial } from '../molecules/Testimonial';

const testimonials: ITestimonial[] = [
  {
    text: "Ryan always does an amazing job with men's haircut. Best and most stylish haircut in New York City.",
    imgSrc: ' https://i.pravatar.cc/300',
    personName: 'Jake Archibald'
  },
  {
    text: "Ryan is nothing short of a magician with a pair of scissors. He takes the time to understand his client's goals and his cuts are so good...",
    imgSrc: 'https://i.pravatar.cc/340',
    personName: 'Miek Rypert'
  },
  {
    text: 'I started seeing Ryan over 10 years ago and have never regretted it. Extremely trusted and expert hair stylist.',
    imgSrc: 'https://i.pravatar.cc/400',
    personName: 'Oleg C.'
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
