import type { NextPage } from 'next';

import Hero from '../components/organisms/Hero';
import Testimonials from '../components/organisms/Testimonials';
import Layout from '../components/templates/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Testimonials />
    </Layout>
  );
};

export default Home;
