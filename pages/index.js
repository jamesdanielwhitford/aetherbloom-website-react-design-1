// File: pages/index.js

import Head from 'next/head'
import Layout from '../components/Layout/Layout'
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
        <meta name="description" content="Transform your business with expertly managed BPO solutions. Cut costs by 40%+ while scaling with South African professionals trained to UK standards." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <Hero />
        <WhyAetherbloom />
        <Services />
        <PricingCalculator />
        <CTA />
        <Footer />
      </Layout>
    </>
  )
}