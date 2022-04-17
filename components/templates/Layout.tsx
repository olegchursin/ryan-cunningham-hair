import Head from 'next/head';
import React from 'react';

import Footer from '../organisms/Footer';
import Navbbar from '../organisms/Navbbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ryan Cunningham Hair</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
