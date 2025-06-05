// File: components/Hero/Hero.js

import { useState } from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'

export default function Hero() {
    const [imageError, setImageError] = useState(false)
    const handleImageError = () => {
        setImageError(true)
    }
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeadline}>
            UK expertise meets<br />
            global talent.
          </h1>
          <p className={styles.heroSubheadline}>
            Transform your business with expertly managed BPO solutions. Cut costs by 40%+ while scaling with South African professionals trained to UK standards.
          </p>
          <div className={styles.heroCtaContainer}>
            <a href="#strategy-session" className={`btn btn-primary ${styles.heroCta}`}>
              Claim Your Free Strategy Session
              <span className={styles.heroCtaArrow}>→</span>
            </a>
            <div className={styles.heroTrustLine}>
              Trusted by 50+ UK SMEs • 4.9/5 Client Satisfaction
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
        <div className={styles.heroImageContainer}>
            {!imageError ? (
            <Image
                src="/hero-image.jpg" // Replace with your image path
                alt="Aetherbloom Business Outsourcing"
                fill
                style={{ objectFit: 'cover' }}
                onError={() => setImageError(true)}
                priority
            />
            ) : (
            <div className={styles.heroImagePlaceholder}>
                <div className={styles.imageOverlay}></div>
            </div>
            )}
        </div>
        </div>
      </div>
    </section>
  )
}