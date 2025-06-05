// File: pages/index.js

import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import WhyAetherbloom from '../components/WhyAetherbloom/WhyAetherbloom'
import Services from '../components/Services/Services'
import PricingCalculator from '../components/PricingCalculator/PricingCalculator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aetherbloom - UK expertise meets global talent</title>
        <meta name="description" content="Transform your business with expertly managed BPO solutions. Cut costs by 40%+ while scaling with South African professionals trained to UK standards." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Hero />
        <WhyAetherbloom />
        <Services />
        <PricingCalculator />
      </Layout>
    </>
  )
}