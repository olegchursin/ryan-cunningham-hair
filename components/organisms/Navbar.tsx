import Link from 'next/link';
import React from 'react';

import BookNowBtn from '../molecules/BookNowBtn';

const links = [
  {
    id: 'home',
    to: '/',
    text: 'Home'
  },
  {
    id: 'about',
    to: '/about',
    text: 'About'
  },
  {
    id: 'services',
    to: '/services',
    text: 'Services'
  },
  {
    id: 'contact',
    to: '/contact',
    text: 'Contact'
  }
];

const Navbar = () => {
  const navItems = (
    <>
      {links.map(link => {
        return (
          <li key={link.id}>
            <Link href={link.to}>{link.text}</Link>
          </li>
        );
      })}
    </>
  );

  const mobileMenu = (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {navItems}
      </ul>
    </div>
  );

  return (
    <div className="container navbar bg-white dark:bg-slate-900">
      <div className="navbar-start">
        {mobileMenu}
        <Link href="/">RC</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <BookNowBtn />
      </div>
    </div>
  );
};

export default Navbar;
