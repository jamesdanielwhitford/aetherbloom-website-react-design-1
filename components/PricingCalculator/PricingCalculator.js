// File: components/PricingCalculator/PricingCalculator.js

import { useState } from 'react'
import styles from './PricingCalculator.module.css'

export default function PricingCalculator() {
  const [selectedService, setSelectedService] = useState('customer-support')
  const [teamSize, setTeamSize] = useState(5)
  
  const services = {
    'customer-support': { name: 'Customer Support', rate: 12 },
    'back-office': { name: 'Back Office Operations', rate: 10 },
    'technical-support': { name: 'Technical Support', rate: 15 },
    'sales-support': { name: 'Sales Support', rate: 13 }
  }

  const calculateSavings = () => {
    const currentCost = teamSize * 35 * 40 * 4.33 // £35/hour UK rate
    const aetherbloomCost = teamSize * services[selectedService].rate * 40 * 4.33
    const savings = currentCost - aetherbloomCost
    const savingsPercentage = Math.round((savings / currentCost) * 100)
    
    return {
      currentCost,
      aetherbloomCost,
      savings,
      savingsPercentage
    }
  }

  const costs = calculateSavings()

  const pricingFeatures = [
    "No Setup Fees",
    "Flexible Contracts",
    "SLA Guarantees", 
    "Transparent Pricing",
    "Real-time Dashboards",
    "Dedicated Account Manager"
  ]

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.pricingContainer}>
        <div className={styles.pricingHeader}>
          <span className={styles.sectionLabel}>Transparent Pricing</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titlePrefix}>See Your</span>
            <span className={styles.titleMain}>Potential Savings</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Calculate your cost savings with our transparent pricing model. 
            No hidden fees, no surprises – just exceptional value.
          </p>
        </div>

        <div className={styles.calculatorSection}>
          <div className={styles.calculatorInputs}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Service Type</label>
              <select 
                value={selectedService} 
                onChange={(e) => setSelectedService(e.target.value)}
                className={styles.selectInput}
              >
                {Object.entries(services).map(([key, service]) => (
                  <option key={key} value={key}>{service.name}</option>
                ))}
              </select>
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Team Size</label>
              <div className={styles.sliderContainer}>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className={styles.rangeInput}
                />
                <span className={styles.sliderValue}>{teamSize} team members</span>
              </div>
            </div>
          </div>

          <div className={styles.calculatorResults}>
            <div className={styles.costComparison}>
              <div className={styles.costItem}>
                <span className={styles.costLabel}>Current UK Cost</span>
                <span className={styles.costValue}>£{costs.currentCost.toLocaleString()}</span>
                <span className={styles.costPeriod}>per month</span>
              </div>
              
              <div className={styles.arrowContainer}>
                <div className={styles.arrow}>→</div>
              </div>
              
              <div className={styles.costItem}>
                <span className={styles.costLabel}>Aetherbloom Cost</span>
                <span className={styles.costValue}>£{costs.aetherbloomCost.toLocaleString()}</span>
                <span className={styles.costPeriod}>per month</span>
              </div>
            </div>
            
            <div className={styles.savingsHighlight}>
              <div className={styles.savingsAmount}>
                <span className={styles.savingsLabel}>Monthly Savings</span>
                <span className={styles.savingsValue}>£{costs.savings.toLocaleString()}</span>
              </div>
              <div className={styles.savingsPercentage}>
                {costs.savingsPercentage}% reduction
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pricingFeatures}>
          <h3 className={styles.featuresTitle}>What's Included</h3>
          <div className={styles.featuresList}>
            {pricingFeatures.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.featureIcon}>✓</span>
                <span className={styles.featureText}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}