"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../home/home.module.css";

/**
 * @returns HomePage
 */

export default function HomePage() {
  return (
    <>
      <main className={styles.mainHome}>
        <section className={styles.homeIntro}>
          <Image
            src={"/assets/photo-profil.jpg"}
            width={200}
            height={200}
            alt="photo-profil"
          ></Image>
          <h2>
            {
              "Un monde de couleurs et de créativité au bout de vos doigts, une touche d'élégance à chaque rendez-vous."
            }
          </h2>
        </section>
        <section className={styles.homePhoto}>
          <Image
            src={"/assets/photo-home-1.jpg"}
            width={250}
            height={250}
            alt="photo-accueil-1"
          ></Image>
          <Image
            src={"/assets/photo-home-2.jpg"}
            width={250}
            height={250}
            alt="photo-accueil-2"
          ></Image>
          <Image
            src={"/assets/photo-home-3.jpg"}
            width={250}
            height={250}
            alt="photo-accueil-3"
          ></Image>
        </section>
      </main>
    </>
  );
}
