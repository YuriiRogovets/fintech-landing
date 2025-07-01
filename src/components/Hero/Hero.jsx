"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import LinkButton from "../LinkButton/LinkButton";
import Benefits from "../Benefits/Benefits";
// import Button from '../Button/Button';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <span className={styles.badge}>by Global Ukraine</span>
          <h1 className={styles.title}>
            <span className={styles.highlight}>KViTKA Pro:</span> BANKING
            <br />
            WITHOUT BORDERS
          </h1>
          <p className={styles.subtitle}>
            KViTKA Pro, a licensed Money Services business, unifies fiat and
            crypto flows so your company can pay, receive, and invest worldwide
            — instant global transfers
          </p>

          <LinkButton href="#" size="large">
            {t("getStarted")}
          </LinkButton>
          
        </div>

        <div className={styles.mockupWrapper}>
          <div className={styles.mockupInner}>
            <Image
            src="/images/mockup.webp" // 👈 ти можеш змінити шлях на свій
            alt="KViTKA Dashboard"
            fill
            className={styles.mockup}
            priority
          />

          </div>
          
        </div>

        
      </div>
      <Benefits/>
    </section>
  );
};

export default Hero;
