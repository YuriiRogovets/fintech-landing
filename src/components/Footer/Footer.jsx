import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import i18n from "../../i18n";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoBlock}>
            <Image
              src="/icons/kvitka-lolo.svg"
              alt="Kvitka"
              width={111}
              height={40}
            />
            <ul className={styles.socials}>
              <li>
                <a href="https://www.instagram.com/globalukraine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" aria-label="instagram">
                  <Image
                    src="/icons/instagram.svg"
                    alt="instagram icon"
                    width={12}
                    height={12}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/GlobalUkraineFoundation/" aria-label="facebook">
                  <Image
                    src="/icons/facebook.svg"
                    alt="facebook icon"
                    width={12}
                    height={12}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/global-ukraine" aria-label="linkedIn">
                  <Image
                    src="/icons/linkedin.svg"
                    alt="In icon"
                    width={12}
                    height={12}
                  />
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/channel/UCDbjrWJz_nMkhZckuvlJ1OA" aria-label="youtube">
                  <Image
                    src="/icons/youtube.svg"
                    alt="youtube icon"
                    width={12}
                    height={8}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@globalukraine" aria-label="tik_tok">
                  <Image
                    src="/icons/tik_tok.svg"
                    alt="tik_tok icon"
                    width={11}
                    height={12}
                  />
                </a>
              </li>
              <li>
                <a href="#" aria-label="telegram">
                  <Image
                    src="/icons/telegram.svg"
                    alt="telegram icon"
                    width={12}
                    height={10}
                  />
                </a>
              </li>
              <li>
                <a href="https://x.com/GlobalUA" aria-label="x">
                  <Image
                    src="/icons/X.svg"
                    alt="X icon"
                    width={10}
                    height={10}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.navBlock}>
            <select
              className={styles.langSelect}
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
              <option value="en">English (EN)</option>
              <option value="ua">Українська (UA)</option>
            </select>
            <div className={styles.links}>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.text}>
            KViTKA by Global Ukraine corporate accounts and cards are issued by
            GBH Canada (registration number OCN 1000765365, located at 80
            Birmingham St, Unit C6, Toronto, Ontario, Canada, M8V 3W6),
            regulated by the Bank of Canada (MSB Registration: C100000033); and
            managed by GBH France (registration number 888 935 202, located at 8
            Rue Graham Bell, 57000 Metz, France).
          </p>
          <div>
            <p className={styles.copyright}>
              GBH France, 8 Graham Bell St. 57070 Metz, FRANCE
            </p>
            <p className={styles.copyright}>
              © 2025 KVITKA Pro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
