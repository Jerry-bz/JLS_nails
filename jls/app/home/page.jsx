"use client";
import React from "react";
import Image from "next/image";
import styles from "../home/home.module.css";

/**
 * @component
 * @returns {Component} - HomePage
 */

export default function HomePage() {
  return (
    <>
      <main className={styles.mainHome}>
        <section className={styles.homeIntro}>
          <Image
            src={"/pictures/picturesHome/JLSnail's.jpg"}
            width={200}
            height={200}
            alt="logo-JLSnail's"
          ></Image>
          <h2>
            Prothésiste ongulaire à Léré.
            <br></br>
            Une touche d'élégance à chaque rendez-vous.
          </h2>
        </section>
        <section className={styles.homePhoto}>
          <Image
            src={"/pictures/picturesHome/home-1.jpg"}
            width={250}
            height={250}
            alt="photo-accueil-1"
          ></Image>
          <Image
            src={"/pictures/picturesHome/home-2.jpg"}
            width={250}
            height={250}
            alt="photo-accueil-2"
          ></Image>
          <Image
            src={"/pictures/picturesHome/home-3.jpg"}
            width={250}
            height={250}
            alt="photo-accueil-3"
          ></Image>
        </section>
      </main>
    </>
  );
}
