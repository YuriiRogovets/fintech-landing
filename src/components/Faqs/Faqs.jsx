"use client";

import styles from "./Faqs.module.css";
import faqs from "./faqs.json";

const Faqs = () => {
  return (
    <section className={styles.section} id="faqs">
      <div className={styles.container}>
        <div className={styles.top}> 
        <h2 className={styles.title}>
          Have Questions? We’ve Got You Covered!
        </h2>
        <h4>Our team is here to assist you</h4>
        <p>Contact us using the form below or email us directly at <a href="mailto:support@kvitka-pro.com">support@kvitka-pro.com.</a></p>
      </div> 
      
        <ul className={styles.list}>
          {faqs.map((faq, i) => (
            <li key={i} className={styles.item}>
              <details className={styles.details}>
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
