import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, onClick, variant = 'primary', disabled = false, type = 'button' }) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >

      <div className={styles.contentWrapper}>

      </div>
      {children}  
      {/* <div className={styles.arrowWrapper}>
          <Image
                          src="/icons/arrow-right-up.svg"
                          alt="arrow icon"
                          width={20}
                          height={20}
                        />
      </div> */}

    </button>
  );
}