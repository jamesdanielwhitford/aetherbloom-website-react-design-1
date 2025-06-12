// File: components/Hero/Hero.js

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroHeader}>
          <span className={styles.heroLabel}>Strategic Outsourcing</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine1}>Elevate Your</span>
            <span className={styles.titleLine2}>UK Business</span>
          </h1>
        </div>
        <p className={styles.heroSubtitle}>
          <span className={styles.highlight}>South Africa-Based BPO</span> built on 
          <span className={styles.highlight}> UK Civil Service Expertise</span> & 
          <span className={styles.highlight}> Data-Driven Talent Matching</span>
        </p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>40%+</span>
            <span className={styles.statLabel}>Cost Reduction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>UK SMEs Trust Us</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4.9/5</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
        </div>
        <a href="#pricing" className={styles.heroCta}>
          Claim Your Free Strategy Session
        </a>
      </div>
    </div>
  )
}