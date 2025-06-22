'use client';
import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';

const Hero = () => {
  const{t}=useTranslation();
  return (
    <section className={styles.hero}>
      <h1>{t('title')}</h1>
    </section>
  );
}

export default Hero;




