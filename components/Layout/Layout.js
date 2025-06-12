// File: components/Layout/Layout.js

import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      {/* Fixed animated petals container */}
      <div className="fixed-petals-container">
        <div className="fixed-petal fixed-petal1"></div>
        <div className="fixed-petal fixed-petal2"></div>
        <div className="fixed-petal fixed-petal3"></div>
        <div className="fixed-petal fixed-petal4"></div>
      </div>
      
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}