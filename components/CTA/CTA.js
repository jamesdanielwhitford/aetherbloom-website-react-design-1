// File: components/CTA/CTA.js

import styles from './CTA.module.css'

export default function CTA() {
  const trustSignals = [
    { metric: "50+", label: "UK SMEs Trust Us" },
    { metric: "4.9/5", label: "Client Satisfaction" },
    { metric: "GDPR", label: "Compliant Operations" },
    { metric: "72hrs", label: "Scale Time" }
  ]

  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaHeader}>
            <h2 className={styles.ctaTitle}>
              <span className={styles.titleLine1}>Ready to</span>
              <span className={styles.titleLine2}>Transform</span>
              <span className={styles.titleLine3}>Your Business?</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              Join 50+ UK SMEs who have already reduced costs by 40%+ while scaling 
              their operations with South African professionals trained to UK standards.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <a href="#contact" className={styles.primaryCta}>
              Claim Your Free Strategy Session
            </a>
            <div className={styles.ctaNote}>
              <span className={styles.noteIcon}>⚡</span>
              <span className={styles.noteText}>No setup fees • Scale in 72 hours • SLA guarantees</span>
            </div>
          </div>

          <div className={styles.trustSignals}>
            {trustSignals.map((signal, index) => (
              <div key={index} className={styles.trustSignal}>
                <span className={styles.trustMetric}>{signal.metric}</span>
                <span className={styles.trustLabel}>{signal.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <span className={styles.contactIcon}>📍</span>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>UK Office</span>
                <span className={styles.contactValue}>London, UK</span>
              </div>
            </div>
            <div className={styles.contactMethod}>
              <span className={styles.contactIcon}>📧</span>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>info@aetherbloom.com</span>
              </div>
            </div>
            <div className={styles.contactMethod}>
              <span className={styles.contactIcon}>💬</span>
              <div className={styles.contactDetails}>
                <span className={styles.contactLabel}>Live Chat</span>
                <span className={styles.contactValue}>UK-based consultants available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}