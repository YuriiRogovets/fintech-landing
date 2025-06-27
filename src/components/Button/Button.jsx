import React from "react";
import Image from "next/image";
import styles from "./Button.module.css";

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "large", 
  disabled = false,
  type = "button",
}) {
  
  return (
    <button
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${disabled ? styles.disabled : ""}
      `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span className={styles.contentWrapper}>
        <span className={styles.label}>{children}</span>
        <span className={styles.arrowWrapper}>
          <Image
            src="/icons/arrow-right-up.svg"
            alt=""
            width={16}
            height={16}
          />
        </span>
      </span>
    </button>
  );
}
