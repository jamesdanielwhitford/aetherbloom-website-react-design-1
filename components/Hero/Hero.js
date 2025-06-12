// File: components/Hero/Hero.js

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Elevate Your UK Business</h1>
        <p className={styles.heroSubtitle}>
          Transform your business with expertly managed BPO solutions, backed by decades of leadership and data-driven talent matching
        </p>
        <a href="#pricing" className={styles.heroCta}>
          Claim Your Free Strategy Session
        </a>
      </div>
    </div>
  )
}