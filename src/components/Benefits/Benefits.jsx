"use client";

import Image from "next/image";

import styles from "./Benefits.module.css";


const Benefits = () => {
  return (
    <section className={styles.benefits}>
        <h2 className= {styles.title}>YOUR BENEFITS WITH US</h2>
          <ul>
            <li>
              <span>Instant SEPA & SWIFT settlement</span>
            </li>
            <li>
              <span>Crypto payments at market speed</span>
            </li>
            <li>
              <span>Fast approval, global coverage</span>
            </li>
            <li>
              <span>Community impact investments</span>
            </li>
          </ul>
        </section>
  )
}

export default Benefits