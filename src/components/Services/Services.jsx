import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./Services.module.css";
import Image from "next/image";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>

        <div className={styles.top}>
          <div className={styles.title}>
            <h2>EMI Services at a Glance</h2>
            <p>
              KViTKA Pro is a licensed Electronic Money Institution built for
              modern enterprises
            </p>
          </div>
          <div className={styles.buttonBox}>
            <p>
              Open your corporate account in minutes and pay globally with
              confidence
            </p>
            <div className={styles.buttonWrapper}>
              <LinkButton href="mailto:kvitka@gbhs.fr" size="large">
                Register Now
              </LinkButton>
            </div>
          </div>
        </div>

        <div className={styles.account}>
          <div className={styles.accountImage}>
            <Image
              src="/images/services.jpg"
              alt="services image"
              width={668}
              height={480}
              priority
            />
          </div>
          <div className={styles.features}>
            <h3>Business account Features</h3>
            <div className={styles.featuresInner}>
              <div className={styles.feature}>
                <Image
                  src="/images/feature01.png"
                  alt="feature image"
                  width={176}
                  height={48}
                />
                <h4>Multi-currency IBANs</h4>
                <p>
                  Dedicated EUR, USD, GBP, AED, and XOF accounts — no forced FX.
                </p>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/images/feature02.png"
                  alt="feature image"
                  width={48}
                  height={48}
                />
                <h4>Real-time updates</h4>
                <p>
                  Balances and transactions refresh instantly for real-time
                  insight.
                </p>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/images/feature03.png"
                  alt="feature image"
                  width={48}
                  height={48}
                />
                <h4>Global coverage</h4>
                <p>Accept and send payments globally from one platform.</p>
              </div>
              <div className={styles.feature}>
                <Image
                  src="/images/feature04.png"
                  alt="feature image"
                  width={48}
                  height={48}
                />
                <h4>Innovative projects hub</h4>
                <p>Access the most innovative projects in one space.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.transfers}>
          <div className={styles.description}>
            <h3>Payments & transfers</h3>
            <ul>
              <li>
                <Image
                  src="/icons/check-circle.svg"
                  alt="services image"
                  width={24}
                  height={24}
                />

                <div className={styles.liContent}>
                  <strong>SEPA Transfers </strong> - fast and reliable euro
                 payments across Europe
                </div>                
              </li>
              <li>
                {" "}
                <Image
                  src="/icons/check-circle.svg"
                  alt="services image"
                  width={24}
                  height={24}
                />
                <div className={styles.liContent}>
                  <strong>SWIFT Transfers </strong> - global reach for
                  international business payments
                </div>
                
              </li>
              <li>
                <Image
                  src="/icons/check-circle.svg"
                  alt="services image"
                  width={24}
                  height={24}
                />
                <div className={styles.liContent}>
                  <strong>Crypto Transactions </strong>- seamless crypto
                   operations, integrated into your account
                </div>                
              </li>
              <li>
                <Image
                  src="/icons/check-circle.svg"
                  alt="services image"
                  width={24}
                  height={24}
                />
                <div className={styles.liContent}>
                  <strong>Internal Transfers </strong> - instant{" "}
                  <strong>free </strong> payments between KViTKA Pro accounts
                </div>                
              </li>

              <li>
                <Image
                  src="/icons/check-circle.svg"
                  alt="services image"
                  width={24}
                  height={24}
                />
                <div className={styles.liContent}>
                  <strong>Investment, crowdfunding and donations </strong> - with{" "}
                <strong>0 fees </strong> directly in one app
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.transferImg}>
            <Image
              src="/images/transfersImg.jpg"
              alt="images"
              width={668}
              height={382}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
