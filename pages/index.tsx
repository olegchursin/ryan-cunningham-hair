import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '../components/organisms/Footer';
import Hero from '../components/organisms/Hero';
import Navbbar from '../components/organisms/Navbbar';
import Testimonials from '../components/organisms/Testimonials';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ryan Cunningham Hair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <Hero />
          <Testimonials />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
