import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Divider } from '@mui/material';
import { MainLayout } from '../components/main-layout';
import { HomeClients } from '../components/home/home-clients';
import { HomeHero } from '../components/home/home-hero';
import { HomeDevelopers } from '../components/home/home-developers';
import { HomeDesigners } from '../components/home/home-designers';
import { HomeFeatures } from '../components/home/home-features';
import { HomeTestimonials } from '../components/home/home-testimonials';
import { gtm } from '../lib/gtm';
import { RulesList } from 'src/components/rules-list';

const Home: NextPage = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>Rulemaker.io</title>
      </Head>
      <main>
        <br />
        <RulesList />
        {/* <HomeHero />
        <Divider />
        <HomeDevelopers />
        <Divider />
        <HomeDesigners />
        <HomeTestimonials />
        <HomeFeatures />
        <Divider />
        <HomeClients /> */}
        <br />
      </main>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
