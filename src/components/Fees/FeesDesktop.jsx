"use client";

import LinkButton from "../LinkButton/LinkButton";
import styles from "./FeesDesktop.module.css";
import plans from "./plans.json";
import Image from "next/image";

const rowLabels = [
  "Account Type",
  "Onboarding Speed",
  "Fees",
  "Dedicated Support",
  "Crypto Enabled",
  "Investment Access",
  "Dashboard & Tools",
  "Crowdfunding & Donations (0% fee)",
  "Custom API Access",
];

const FeesDesktop = () => {
  return (
    <section className={styles.section} id="fees">
      <div className={styles.container}>
        <h2 className={styles.heading}>Transparent Fees</h2>
        <p className={styles.subheading}>
          We believe in simplicity and clarity. No hidden costs or surprise
          fees.
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={`${styles.headCell} ${styles.logoHeader}`}>
                  <Image
                    src="/icons/kvitka-lolo.svg"
                    alt="Kvitka Logo"
                    width={111}
                    height={40}
                  />
                </th>
                {plans.map((plan, idx) => (
                  <th key={idx} className={styles.headCell}>
                    <div className={styles.planName}>{plan.name}</div>
                    <p className={styles.subtitle}>{plan.comment}</p>
                    <LinkButton href={`/${plan.action}`} size="large">
                      {plan.action}
                    </LinkButton>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowLabels.map((label, rowIndex) => (
                
                  <tr key={rowIndex}
                   className={`${styles.row} ${rowIndex % 2 === 0 ? styles.odd : ''}`}
                  >
                  <td className={styles.label}>{label}</td>
                  {plans.map((plan, colIndex) => (
                    <td key={colIndex} className={styles.cell}>
                      {plan.features[rowIndex]}
                    </td>
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

export default FeesDesktop;
