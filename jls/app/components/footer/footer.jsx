import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

/**
 * @componant
 * Composant qui affiche le footer
 * @returns - Footer
 */

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <h2 className={styles.footerTitle}>Informations</h2>
          <ul className={styles.footerList}>
            <li>Numéro de Siren : 919561126 </li>
            <li>
              <Link href={"/about"} aria-label="À propos">A propos</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles.footerTitle}>Mes Réseaux</h2>
          <ul className={styles.footerList}>
            <li>
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  rowGap: "5px",
                }}
                href="https://www.facebook.com/profile.php?id=100084753964757"
                target="_blank"
                aria-label="Page Facebook"
              >
                <Image
                  src="pictures/svg/facebook.svg"
                  alt="logo-facebook"
                  width={30}
                  height={30}
                ></Image>
                Facebook
              </Link>
            </li>
            <li>
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  rowGap: "5px",
                }}
                href="https://www.instagram.com/jls_nail18?igshid=ZnVkcWZ2ZnZtZmht&utm_source=qr&fbclid=IwAR35T-FXezNcU7mC8D1nL5DmBEO_8q7IYFIAZuKEujjYSUQwOsDIfs3k8Og"
                target="_blank"
                aria-label="Page Instagram"
              >
                <Image
                  src="pictures/svg/instagram.svg"
                  alt="logo-instagram"
                  width={30}
                  height={30}
                ></Image>
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
