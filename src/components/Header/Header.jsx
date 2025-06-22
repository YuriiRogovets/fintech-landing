'use client';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  const {t} = useTranslation();
  
  return (
     <header className={styles.header}>
      <div>{t('logo')}</div>
      <LanguageSwitcher />
    </header>
  );
}