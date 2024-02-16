"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../home/home.module.css";
import Map from "../components/map/maps";




/**
 * @component
 * @returns {Component} - HomePage
 */

export default function HomePage() {

  const [showMap,setShowMap] = useState(false)

  // showMap deviens true
  const mapIsTrue = () => {
    setShowMap((prev) => !prev)
  }

  return (
    <>
      <main className={styles.mainHome}>
        <div className={styles.homeDescription}>
          <Image
            className={styles.homeImage}
            src="/pictures/divers/photoProfil.webp"
            width={350}
            height={700}
            alt="logo-JLSnail's"
          ></Image>
          <div className={styles.homePresentation}>
            <p>
              Moi, c’est Samantha, je suis prothésiste ongulaire et je serai
              ravi de vous accueillir dans une ambiance chaleureuse au{" "}
              <span className={styles.homeLink}>
                <Link onClick={mapIsTrue} href="/#map" aria-label="localisation de l'entreprise">8 route de Gien à Léré</Link>
              </span>{" "}
              , entre Cosne-Cours-sur-Loire (58) et Belleville-sur-Loire(18)
              dans le département du cher (18).
            </p>
            <p>
              Diplômée depuis octobre 2021, j’ai appris grâce à diverses{" "}
              <span className={styles.homeLink}>
                <Link href="/about" aria-label="À propos">formations</Link>
              </span>{" "}
              plusieurs techniques afin de m’adapter à tout type d’ongles :
              ongles crochus, rongés, fragilisés , long, courts…
            </p>
            <p>
              Que vous souhaitiez faire une extension ou une pose sur vos ongles
              naturels, je serais ravie de faire un diagnostic avec vous afin de
              trouver au mieux la pose qu’il vous conviendra.
            </p>
            <div className={styles.homeInformations}>
              <button>
                <Link href={"/services"} aria-label="Mes services">Mes services</Link>
              </button>
              <button>
                <Link href={"/prices"} aria-label="Tarifs">Mes Tarifs</Link>
              </button>
              <button>
                <Link href={"/contact"} aria-label="Contact">Me Contacter</Link>
              </button>
            </div>
          </div>
        </div>
      {/* Si showMap est vrai on affiche le Composant Map */}
        {showMap && <Map/>}
      </main>
    </>
  );
}
