import React from "react";
import Image from "next/image";
import styles from "../about/about.module.css";

export const metadata = {
  title: "Page À propos - JLS Nail's",
};

export default function AboutPage() {
  return (
    <>
      <main className={styles.mainAbout}>
        <section className={styles.aboutIntro}>
          <Image className={styles.aboutImg}
            src={"/assets/photoProfil.jpg"}
            width={200}
            height={200}
            alt="logo-entreprise"
          ></Image>
          <h1 className={styles.aboutTitle}>{`Bienvenue chez JLS NAIL’S.`}</h1>
        </section>
        <section className={styles.aboutPresentation}>
          <p className={styles.aboutText}>
            {`Je m'appelle Samantha et je suis passionnée par l'onglerie. J’ai ouvert mon institut en octobre 2022 et suite à diverses formations, je peux vous proposer plusieurs types de prestations tels que la pose de   vernis semi-permanent sur main et pied , l’extension chablon , un gainage…`}
          </p>
          <p className={styles.aboutText}>
            {` Que vous ayez les ongles courts, long ou même rongés, je serais ravie d’embellir vos mains.
            N’hésitez pas à aller voir mes poses sur Instagram et Facebook et je reste disponible pour répondre à vos questions ou pour prendre rendez-vous.`}
          </p>
        </section>
      </main>
    </>
  );
}
