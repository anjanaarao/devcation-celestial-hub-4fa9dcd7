
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tracks from '@/components/Tracks';
import Judges from '@/components/Judges';
import Mentors from '@/components/Mentors';
import Timeline from '@/components/Timeline';
import Prizes from '@/components/Prizes';
import Sponsors from '@/components/Sponsors';
import FAQ from '@/components/FAQ';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Tracks />
      <Judges />
      <Mentors />
      <Timeline />
      <Prizes />
      <Sponsors />
      <FAQ />
    </Layout>
  );
};

export default Index;
