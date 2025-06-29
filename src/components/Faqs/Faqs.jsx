"use client";

import styles from "./Faqs.module.css";
import faqs from "./faqs.json";

const Faqs = () => {
  return (
    <section className={styles.section} id="faqs">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Have Questions? We’ve Got You Covered!
        </h2>
        <ul className={styles.list}>
          {faqs.map((faq, i) => (
            <li key={i} className={styles.item}>
              <details>
                <summary className={styles.summary}>{faq.question}</summary>
                <p className={styles.answer}>{faq.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;
