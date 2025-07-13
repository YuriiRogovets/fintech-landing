"use client";

import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "../LinkButton/LinkButton";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/icons/kvitka-lolo.svg"
            alt="Kvitka Logo"
            width={110}
            height={40}
            priority
          />
        </Link>
        {/* Right side */}
        <div className={styles.right}>
          <LanguageSwitcher />

          {/* CTA button */}
          <LinkButton href="mailto:kvitka@gbhs.fr" size="small">
            Sign up
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
