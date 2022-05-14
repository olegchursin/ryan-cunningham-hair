import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import insta from '../../public/img/instagram-color.svg';
import ryanLogo from '../../public/img/rch-logo-wh.svg';

// icons: https://icons8.com/icon/set/social-media/color
const socialMediaIcons = [
  {
    img: insta,
    href: 'https://www.instagram.com/ryancunninghamhair/',
    alt: 'Instagram',
    target: '_blank',
    rel: 'noreferrer',
    width: '48px',
    heiht: '48px'
  }
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-slate-900 text-neutral-content">
      <div>
        <Link href="/">
          <Image
            src={ryanLogo}
            alt="Ryan Cunningham Hair - Logo"
            width="300px"
            height="60px"
          />
        </Link>

        <p>Hair Stylist and Educator</p>
      </div>
      <div className="grid grid-flow-col gap-4">
        {socialMediaIcons.map(icon => {
          return (
            <a href={icon.href} target={icon.target} rel={icon.rel}>
              <Image
                src={icon.img}
                alt={icon.alt}
                width={icon.width}
                height={icon.heiht}
              />
            </a>
          );
        })}
      </div>

      <p>Copyright © {currentYear} - All right reserved</p>
    </footer>
  );
};

export default Footer;
