// File: components/WhyAetherbloom/WhyAetherbloom.js

import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const differentiators = [
    {
      icon: '💼',
      title: 'Expert Leadership',
      description: 'Founded by a UK Civil Service HR Leader & Met Office Data Analyst'
    },
    {
      icon: '🔒',
      title: 'UK Compliance Ready',
      description: 'BPO Teams Pre-Trained in UK Compliance (GDPR, ISO)'
    },
    {
      icon: '📊',
      title: 'Data-Driven Matching',
      description: '20% Faster Talent Matching via Proprietary Analytics'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No Hidden Fees – Transparent SLAs, Real-Time Reporting'
    },
    {
      icon: '🎓',
      title: 'Top Talent Pool',
      description: '#1 in Africa for STEM Graduates (QS Rankings)'
    },
    {
      icon: '💸',
      title: 'Cost Efficiency',
      description: 'Premium talent at 40% lower operational costs'
    }
  ]

  return (
    <section id="why-aetherbloom" className={styles.whySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Aetherbloom?</h2>
          <p className={styles.subtitle}>
            Where expertise meets impact. Discover the differentiators that drive results for UK businesses.
          </p>
        </div>

        <div className={styles.differentiators}>
          {differentiators.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.mission}>
          <div className={styles.missionContent}>
            <h3 className={styles.missionTitle}>Our Ethical Mission</h3>
            <blockquote className={styles.missionQuote}>
              "Where expertise meets impact."
            </blockquote>
            <p className={styles.missionText}>
              Aetherbloom was created to bridge the gap between UK business needs and South Africa's untapped potential. 
              We deliver best-in-class outsourcing while creating meaningful job opportunities for South African youth 
              through training, development, and sustainable career paths.
            </p>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Trusted UK SMEs</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4.9/5</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>40%+</span>
            <span className={styles.statLabel}>Cost Reduction</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>92%</span>
            <span className={styles.statLabel}>English Fluency</span>
          </div>
        </div>
      </div>
    </section>
  )
}