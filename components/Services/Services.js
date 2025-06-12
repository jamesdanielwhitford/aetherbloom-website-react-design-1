// File: components/Services/Services.js

import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      title: "Customer Support",
      subtitle: "Omnichannel Excellence",
      description: "UK-trained teams delivering exceptional customer experiences across all touchpoints with native-level communication skills.",
      features: ["24/7 Multi-channel Support", "UK Compliance Training", "Real-time Quality Monitoring"],
      accent: "emerald"
    },
    {
      title: "Back Office Operations", 
      subtitle: "Streamlined Efficiency",
      description: "Comprehensive administrative support including data entry, finance, HR, and operational tasks with civil service-grade accuracy.",
      features: ["Data Processing & Entry", "Financial Administration", "HR Support Services"],
      accent: "blue"
    },
    {
      title: "Technical Support",
      subtitle: "Expert Problem Solving",
      description: "Tiered IT helpdesk and software support from STEM graduates, ensuring rapid resolution and technical excellence.",
      features: ["Tiered IT Helpdesk", "Software Support", "Technical Documentation"],
      accent: "purple"
    },
    {
      title: "Sales Support",
      subtitle: "Revenue Acceleration",
      description: "Lead generation, CRM management, and appointment setting services designed to fuel your growth pipeline.",
      features: ["Lead Generation", "CRM Management", "Appointment Setting"],
      accent: "orange"
    }
  ]

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <span className={styles.sectionLabel}>Our Services</span>
          <h2 className={styles.sectionTitle}>
            Tailored BPO Solutions for 
            <span className={styles.titleHighlight}> Every Business Need</span>
          </h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.serviceItem} ${styles[service.accent]}`}>
              <div className={styles.serviceNumber}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.serviceFeature}>
                      <span className={styles.featureIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.servicesFooter}>
          <p className={styles.footerText}>
            All services include <strong>UK compliance training</strong>, <strong>real-time reporting</strong>, 
            and <strong>dedicated account management</strong> to ensure seamless integration with your business.
          </p>
        </div>
      </div>
    </section>
  )
}