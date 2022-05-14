import Link from 'next/link';
import React from 'react';

const styles: React.CSSProperties = {
  backgroundImage:
    'url(https://www.ryancunninghamhair.com/static/32c076ee5496131b3935d66990c2b326/adafa/ryan-cunningham-hair.webp)'
};

const Hero = () => {
  return (
    <div className="hero h-128 min-h-full w-screen" style={styles}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Ryan Cunningham</h1>
          <p className="mb-5">
            Creating a look you’ll love to really lift your mood. Specializing
            in high end men's and women's haircuts, grooming, and styling in a
            gorgeous, private space.
          </p>
          <Link href="/services">
            <button className="btn btn-primary">Services</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
