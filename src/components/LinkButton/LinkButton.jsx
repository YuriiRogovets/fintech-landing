import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./LinkButton.module.css";

export default function LinkButton({
  href,
  children,
  size = "large",
  target, // якщо треба _blank
}) {
  const iconSize = size === "small" ? 20 : 24;

  return (
    <div className={`${styles.wrapper} ${styles[size]}`}>
      <Link className={styles.labelLink} href={href} target={target}>
        <div className={styles.labelContent}>{children}</div>
        <div className={styles.iconWrapper}>
          <Image
            src="/icons/arrow-right-up.svg"
            alt=""
            width={iconSize}
            height={iconSize}
          />
        </div>
      </Link>
    </div>
  );
}
