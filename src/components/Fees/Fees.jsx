"use client";

import styles from './Fees.module.css';
import plans from "./plans.json"

const Fees = () => {
 

  const rows = [
    "Onboarding Speed",
    "Customer Service",
    "Crypto Enabled",
    "Document Access",
    "Custom API Access",
  ];

  

  return (
    <section className={styles.section} id="fees">
      <div className={styles.container}>
        <h2 className={styles.heading}>Transparent Fees</h2>
        <p className={styles.subheading}>
          We believe in simplicity and clarity. No hidden costs or surprise fees.
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Account Aspect</th>
                {plans.map((plan, idx) => (
                  <th key={idx}>
                    {plan.name}
                    <br />
                    <button className={styles.action}>{plan.action}</button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row}</td>
                  {plans.map((plan, colIndex) => (
                    <td key={colIndex}>{plan.features[rowIndex]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </section>
  );
};

export default Fees;