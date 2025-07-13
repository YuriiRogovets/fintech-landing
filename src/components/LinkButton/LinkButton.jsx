import React from "react";
// import Link from "next/link";
import Image from "next/image";
import styles from "./LinkButton.module.css";

export default function LinkButton({
  href,
  children,
  size = "large",
  
}) {
  const iconSize = size === "small" ? 20 : 24;

  return (
    <div className={`${styles.wrapper} ${styles[size]}`}>
      <a className={styles.labelLink} href={href} >
        <div className={styles.labelContent}>{children}</div>
        <div className={styles.iconWrapper}>
          <Image
            src="/icons/arrow-right-up.svg"
            alt=""
            width={iconSize}
            height={iconSize}
          />
        </div>
      </a>
    </div>
  );
}
