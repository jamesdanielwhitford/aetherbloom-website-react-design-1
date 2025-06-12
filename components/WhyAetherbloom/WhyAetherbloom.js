// File: components/WhyAetherbloom/WhyAetherbloom.js

import styles from './WhyAetherbloom.module.css'

export default function WhyAetherbloom() {
  const differentiators = [
    {
      icon: "💼",
      title: "Founded by UK Civil Service HR Leader & Met Office Data Analyst",
      description: "Built on public sector rigor and data-driven excellence"
    },
    {
      icon: "🔒",
      title: "BPO Teams Pre-Trained in UK Compliance",
      description: "GDPR, ISO standards integrated from day one"
    },
    {
      icon: "📊",
      title: "20% Faster Talent Matching",
      description: "Proprietary analytics ensure perfect cultural fit"
    },
    {
      icon: "💰",
      title: "No Hidden Fees",
      description: "Transparent SLAs with real-time reporting dashboards"
    },
    {
      icon: "🎓",
      title: "#1 in Africa for STEM Graduates",
      description: "QS Rankings verified talent pool"
    },
    {
      icon: "🗣️",
      title: "92% English Fluency",
      description: "Professional workforce with native-level communication"
    }
  ]

  return (
    <section id="why-aetherbloom" className={styles.whySection}>
      <div className={styles.whyContainer}>
        <div className={styles.whyHeader}>
          <span className={styles.sectionLabel}>Our Foundation</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleWord}>Where</span>
            <span className={styles.titleWord}>Expertise</span>
            <span className={styles.titleWord}>Meets</span>
            <span className={styles.titleWordHighlight}>Impact</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Aetherbloom bridges UK business needs with South Africa's untapped potential, 
            delivering <strong>best-in-class outsourcing</strong> while creating 
            <strong> meaningful opportunities</strong> for South African youth.
          </p>
        </div>

        <div className={styles.differentiatorsList}>
          {differentiators.map((item, index) => (
            <div key={index} className={styles.differentiatorItem}>
              <div className={styles.differentiatorIcon}>{item.icon}</div>
              <div className={styles.differentiatorContent}>
                <h3 className={styles.differentiatorTitle}>{item.title}</h3>
                <p className={styles.differentiatorDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.missionStatement}>
          <div className={styles.missionContent}>
            <h3 className={styles.missionTitle}>Our Dual Mission</h3>
            <div className={styles.missionPoints}>
              <div className={styles.missionPoint}>
                <span className={styles.missionNumber}>01</span>
                <span className={styles.missionText}>Deliver best-in-class outsourcing for UK businesses</span>
              </div>
              <div className={styles.missionPoint}>
                <span className={styles.missionNumber}>02</span>
                <span className={styles.missionText}>Create meaningful job opportunities for South African youth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}