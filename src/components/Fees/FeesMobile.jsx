"use client";

import LinkButton from "../LinkButton/LinkButton";
import styles from "./FeesMobile.module.css";
import plans from "./plans.json";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

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

const FeesMobile = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const slider = sliderRef.current;
      if (!slider) return;
      const scrollLeft = slider.scrollLeft;
      const cardWidth = slider.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    const slider = sliderRef.current;
    slider?.addEventListener("scroll", handleScroll);
    return () => slider?.removeEventListener("scroll", handleScroll);
    
  }, []);

  // --- Вирівнювання висоти рядків у всіх картках ---
  useEffect(() => {
    const syncRowHeights = () => {
      const cards = sliderRef.current?.querySelectorAll(`.${styles.card}`);
      if (!cards || cards.length === 0) return;

      const numRows = rowLabels.length;
      const rowHeights = Array(numRows).fill(0);

      // Обнуляємо старі висоти
      cards.forEach((card) => {
        const rows = card.querySelectorAll(`.${styles.featureRow}`);
        rows.forEach((row) => {
          row.style.height = "auto";
        });
      });

      // Збираємо максимальні висоти
      cards.forEach((card) => {
        const rows = card.querySelectorAll(`.${styles.featureRow}`);
        rows.forEach((row, i) => {
          rowHeights[i] = Math.max(rowHeights[i], row.clientHeight);
        });
      });

      // Присвоюємо однакову висоту
      cards.forEach((card) => {
        const rows = card.querySelectorAll(`.${styles.featureRow}`);
        rows.forEach((row, i) => {
          row.style.height = `${rowHeights[i]}px`;
        });
      });
    };

    syncRowHeights();
    window.addEventListener("resize", syncRowHeights);
    return () => window.removeEventListener("resize", syncRowHeights);
  }, [plans]);


  return (
    <section className={styles.section}>
      <div className={styles.headingBlock}>
        <h2 className={styles.heading}>Transparent Fees</h2>
        <p className={styles.subheading}>
          We believe in simplicity and clarity. No hidden costs or surprise fees
        </p>

        <Image
          src="/icons/kvitka-lolo.svg"
          alt="Kvitka Logo"
          width={133}
          height={48}
        />
      </div>

      <div className={styles.slider} ref={sliderRef}>
        {plans.map((plan, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{plan.name}</h3>
              <p className={styles.subtitle}>{plan.comment}</p>
              <LinkButton href={`/${plan.action}`} size="large">
                {plan.action}
              </LinkButton>
            </div>
            <ul className={styles.features}>
              {rowLabels.map((label, i) => (
                <li key={i} className={styles.featureRow}>
                  <span className={styles.label}>{label}</span>
                  <span className={styles.value}>{plan.features[i]}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {plans.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${
              activeIndex === idx ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeesMobile;
