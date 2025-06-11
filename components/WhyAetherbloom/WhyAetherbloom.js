// File: components/WhyAetherbloom/WhyAetherbloom.js

import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const features = [
    {
      icon: '💼',
      title: 'UK Civil Service Founded',
      description: 'Founded by a UK Civil Service HR Leader & Met Office Data Analyst with decades of public sector rigor and compliance expertise.'
    },
    {
      icon: '🔒',
      title: 'UK Compliance Ready',
      description: 'BPO Teams Pre-Trained in UK Compliance (GDPR, ISO) with civil-service grade audits and real-time monitoring.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Matching',
      description: '20% faster talent matching via proprietary analytics and transparent SLAs with real-time reporting dashboards.'
    },
    {
      icon: '🎓',
      title: 'Top STEM Graduates',
      description: '#1 in Africa for STEM Graduates (QS Rankings) with 92% English fluency in our professional workforce.'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, flexible contracts that scale in 72 hours, with SLA guarantees and real consequences.'
    },
    {
      icon: '🌍',
      title: 'Ethical Impact',
      description: 'Creating meaningful opportunities for South African youth through job readiness programs and leadership development.'
    }
  ]

  const stats = [
    { number: '40%+', label: 'Cost Reduction' },
    { number: '50+', label: 'UK SMEs Trust Us' },
    { number: '4.9/5', label: 'Client Satisfaction' },
    { number: '72hrs', label: 'Scale Time' }
  ]

  return (
    <section className={styles.whySection} id="why-aetherbloom">
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>WHY AETHERBLOOM?</h2>
        <p className={styles.sectionSubtitle}>
          Differentiators That Drive Results - Where Expertise Meets Impact
        </p>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureContent}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statsContent}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}