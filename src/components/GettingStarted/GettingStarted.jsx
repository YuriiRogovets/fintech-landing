import React from "react";
import styles from "./GettingStarted.module.css";
import LinkButton from "../LinkButton/LinkButton";

export default function gettingStarted() {
  return (
    <section className={styles.gettingStarted}>
      <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <h2>Getting started is easy</h2>
                    <p>
                    KVITKA Pro is a licensed Electronic Money Institution built for
                    global modern enterprises and freelancers
                    </p>
                </div>
                <LinkButton href="#" size="large">Register Now</LinkButton>
            </div>

            <div className={styles.steps}>
                <div className={styles.step}>
                    <div className={styles.circle}></div>
                    <p>Sign up with a quick online form</p>
                </div>
                <div className={styles.step}>
                    <div className={styles.circle}></div>
                    <p>Upload your KYB documents</p>
                </div>
                <div className={styles.step}>
                    <div className={styles.circle}></div>
                    <p>We run a swift compliance check</p>
                </div>
                <div className={styles.step}>
                    <div className={styles.circle}></div>
                    <p>
                    Your account goes live - often within 3 business days
                    </p>
                </div>
           </div>
      </div>

      <div className={styles.bottomInfo}>
        <div className={styles.card}>
          <h4>Why approval is fast</h4>
          <ul>
            <li>Streamlined onboarding flow</li>
            <li>Priority review for eligible firms</li>
          </ul>
        </div>
        <div className={styles.card}>
          <h4>Compliance & Security</h4>
          <ul>
            <li>Fully licensed MSB</li>
            <li>End-to-end data encryption</li>
            <li>Ongoing Global AML and KYC monitoring</li>
            <li>GDPR-compliant data handling</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
