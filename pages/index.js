// File: pages/index.js

import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import WhyAetherbloom from '../components/WhyAetherbloom/WhyAetherbloom'
import Services from '../components/Services/Services'
import PricingCalculator from '../components/PricingCalculator/PricingCalculator'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aetherbloom - UK expertise meets global talent</title>
        <meta name="description" content="Transform your business with expertly managed BPO solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Navbar />
        <Hero />
        <WhyAetherbloom />
        <Services />
        <PricingCalculator />
      </Layout>
    </>
  )
}