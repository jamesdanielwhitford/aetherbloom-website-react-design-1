// File: components/Hero/Hero.js

import styles from './Hero.module.css'

export default function Hero() {
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

        <div className={styles.heroImageContainer}>
          <div className={styles.heroImagePlaceholder}>
            Professional team image will be placed here
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>40%+</span>
            <span className={styles.heroStatLabel}>Cost Reduction</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>72hrs</span>
            <span className={styles.heroStatLabel}>Team Scaling</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>92%</span>
            <span className={styles.heroStatLabel}>English Fluency</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNumber}>4.9/5</span>
            <span className={styles.heroStatLabel}>Client Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}