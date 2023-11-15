import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <h3 className={styles.footerTitle}>Informations</h3>
          <ul className={styles.footerList}>
            <li>Téléphone : 07 63 09 77 70</li>
            <li>Numéro de Siren : 919561126 </li>
            <li>
              <Link href={"/about"}>A propos</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footerTitle}>Mes Réseaux</h3>
          <ul className={styles.footerList}>
            <li>
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "3% 0%",
                }}
                href="https://www.facebook.com/profile.php?id=100084753964757"
                target="_blank"
              >
                <Image
                  src="assets/facebook.svg"
                  alt="logo-facebook"
                  width={25}
                  height={25}
                ></Image>
                Facebook
              </Link>
            </li>
            <li>
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "3% 0%",
                }}
                href="https://www.instagram.com/jls_nail18?igshid=ZnVkcWZ2ZnZtZmht&utm_source=qr&fbclid=IwAR35T-FXezNcU7mC8D1nL5DmBEO_8q7IYFIAZuKEujjYSUQwOsDIfs3k8Og"
                target="_blank"
              >
                <Image
                  src="assets/instagram.svg"
                  alt="logo-instagram"
                  width={25}
                  height={25}
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
