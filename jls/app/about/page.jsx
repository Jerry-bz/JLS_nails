import React from "react";
import Image from "next/image";
import styles from "../about/about.module.css";

export const metadata = {
  title: "Histoire de l'entreprise - JLS Nail's",
};

/**
 * @component
 * @returns {Component} - AboutPage
 *
 */


export default function AboutPage() {
  return (
    <>
      <main className={styles.mainAbout}>
        <section className={styles.aboutIntro}>
          <Image
            className={styles.aboutImg}
            src={"/pictures/photoApropos.webp"}
            width={200}
            height={200}
            alt="logo-entreprise"
          ></Image>
          <h1 className={styles.aboutTitle}>À propos</h1>
        </section>
        <section className={styles.aboutPresentation}>
          <p className={styles.aboutText}>
            Bienvenue chez JLS Nail's. Étant passionnée par l’onglerie depuis
            toujours, je suis sans arrêt à la recherche de nouvelles techniques
            et de perfectionnement, c’est pourquoi au cours de mon parcours,
            j’ai effectué diverses formations :
          </p>
          <ul className={styles.aboutText}>
            <div className={styles.aboutList}>
              <Image
                src={"/pictures/svg/asterisque.svg"}
                width={24}
                height={24}
                alt="asterisque"
              ></Image>
              <li>Formation de base</li>
            </div>
            <div className={styles.aboutList}>
              <Image
                src={"/pictures/svg/asterisque.svg"}
                width={24}
                height={24}
                alt="asterisque"
              ></Image>
              <li>Manucure</li>
            </div>
            <div className={styles.aboutList}>
              <Image
                src={"/pictures/svg/asterisque.svg"}
                width={24}
                height={24}
                alt="asterisque"
              ></Image>
              <li>Formes </li>
            </div>
            <div className={styles.aboutList}>
              <Image
                src={"/pictures/svg/asterisque.svg"}
                width={24}
                height={24}
                alt="asterisque"
              ></Image>
              <li>Utilisation de la Ponceuse</li>
            </div>
            <div className={styles.aboutList}>
              <Image
                src={"/pictures/svg/asterisque.svg"}
                width={24}
                height={24}
                alt="asterisque"
              ></Image>
              <li> Perfectionnement Chablon</li>
            </div>
            <div className={styles.aboutList}>
              <Image
                src={"/pictures/svg/asterisque.svg"}
                width={24}
                height={24}
                alt="asterisque"
              ></Image>
              <li>Perfectionnement à la technique sans limage</li>
            </div>
          </ul>

          <p className={styles.aboutText}>
            Grâce à ces formations, je peux vous proposer deux types{" "}
            <span>d’extensions</span> : le chablon et le popit. Mais je peux
            également vous faire un <span>gainage</span>, un renforcement ou
            même un <span>vernis semi-permanent</span> sur les mains et les
            pieds. Je m’adapte à toutes vos envies et si vous êtes en manque
            d’inspiration, je suis là pour vous guider.
          </p>
          <p className={styles.aboutText}>
            Je peux également proposer divers types de nail art tel que les
            babyboomer , les babycolor, les strass, la french manucure,
            incrustations de paillettes , pierres précieuses et autres . La
            propreté étant importante à mes yeux , la table et les lampes sont
            nettoyer après chaque clientes et les outils sont désinfectés et
            stérilisés après chaque utilisation.
          </p>
        </section>
      </main>
    </>
  );
}
