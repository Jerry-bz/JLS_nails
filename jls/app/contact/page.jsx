import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/contact/contact.module.css";

export const metadata = {
  title: "Contactez - JLS Nail's",
  description:
    "Consultez les informations pour afin de me contacter et prendre un rendez vous.",
};

/**
 * @component
 * @returns {Component} - PricesPage
 */

export default function contactPage() {
  return (
    <>
      <main className={styles.mainContact}>
        <table className={styles.mainTable}>
          <caption>Contactez JLS Nail's</caption>
          <thead>
            <tr>
              <th colSpan={2}>Coordonnées</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Téléphone</td>
              <td className={styles.alignRight}>07 63 09 77 70</td>
            </tr>
            <tr>
              <td>Adresse mail</td>
              <td className={styles.alignRight}>jlsnail18@outlook.fr</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>Réseaux</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link
                  style={{
                    display: "flex",
                    alignItems: "center",
                    rowGap: "5px",
                  }}
                  href="https://www.facebook.com/profile.php?id=100084753964757"
                  target="_blank"
                >
                  <Image
                    src="pictures/svg/facebook.svg"
                    alt="logo-facebook"
                    width={30}
                    height={30}
                  ></Image>
                  Facebook
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link
                  style={{
                    display: "flex",
                    alignItems: "center",
                    rowGap: "5px",
                  }}
                  href="https://www.instagram.com/jls_nail18?igshid=ZnVkcWZ2ZnZtZmht&utm_source=qr&fbclid=IwAR35T-FXezNcU7mC8D1nL5DmBEO_8q7IYFIAZuKEujjYSUQwOsDIfs3k8Og"
                  target="_blank"
                >
                  <Image
                    src="pictures/svg/instagram.svg"
                    alt="logo-instagram"
                    width={30}
                    height={30}
                  ></Image>
                  Instagram
                </Link>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>{`Prise de rendez vous`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matin</td>
              <td className={styles.alignRight}>9h30-12h</td>
            </tr>

            <tr>
              <td>Aprem-midi</td>
              <td className={styles.alignRight}>13h30-17h30</td>
            </tr>

            <tr>
              <td>Fermeture</td>
              <td className={styles.alignRight}>Jeudi-dimanche</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
