// File: components/Hero/Hero.js

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroGrid}>
          {/* Main Typography Section */}
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine1}>We Transform</span>
              <span className={styles.titleLine2}>UK Business</span>
              <span className={styles.titleLine3}>Through Strategic</span>
              <span className={styles.titleLine4}>Outsourcing</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Backed by decades of UK Civil Service expertise and data-driven talent matching. 
              Cut costs by 40%+ while scaling with South African professionals trained to UK standards.
            </p>
            
            <div className={styles.heroActions}>
              <a href="#pricing" className={styles.primaryCta}>
                Claim Your Free Strategy Session
              </a>
              <a href="#services" className={styles.secondaryCta}>
                See Our Services
              </a>
            </div>
          </div>
          
          {/* Media Square Section */}
          <div className={styles.mediaContainer}>
            <div className={styles.mediaSquare}>
              <div className={styles.videoPlaceholder}>
                <div className={styles.playIcon}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.1)" />
                    <path d="M23 20L40 30L23 40V20Z" fill="white" />
                  </svg>
                </div>
                <p className={styles.placeholderText}>Video will be placed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}