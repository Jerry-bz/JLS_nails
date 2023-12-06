"use client";

import React, { useState, useEffect } from "react";
import data from "../../data/data.json";
import Image from "next/image";
import styles from "./picturesGallery.module.css";

export default function PicturesGallery() {
  const [currentCategory, setCurrentCategory] = useState("Tous");

  useEffect(() => {
    setCurrentCategory("Tous");
  }, []);

  return (
    <>
      {/* Boutons pour sélectionner la catégorie */}
      <div className={styles.servicesMenu}>
        <section className={styles.servicesMenuButton}>
          <button
            className={
              currentCategory === "Tous"
                ? styles.activeButton
                : styles.inactiveButton
            }
            onClick={() => setCurrentCategory("Tous")}
          >
            Tous
          </button>
          <button
            className={
              currentCategory === "Chablon"
                ? styles.activeButton
                : styles.inactiveButton
            }
            onClick={() => setCurrentCategory("Chablon")}
          >
            Chablon
          </button>
          <button
            className={
              currentCategory === "Gel"
                ? styles.activeButton
                : styles.inactiveButton
            }
            onClick={() => setCurrentCategory("Gel")}
          >
            Gel sur ongle naturel
          </button>
          <button
            className={
              currentCategory === "VSP"
                ? styles.activeButton
                : styles.inactiveButton
            }
            onClick={() => setCurrentCategory("VSP")}
          >
            VSP
          </button>
        </section>
      </div>

      {/* Affichage des images en fonction de la catégorie sélectionnée */}
      <section className={styles.servicesPresentation}>
        {currentCategory === "Tous"
          ? Object.values(data)
              .flat()
              .map((image, index) => (
                <div key={`${image.id}_${index}`}>
                  <Image
                    className={styles.servicesImg}
                    src={image.url}
                    alt={image.category}
                    width={200}
                    height={200}
                  />
                </div>
              ))
          : data[currentCategory as keyof typeof data].map((image) => (
              <div key={image.id}>
                <Image
                  className={styles.servicesImg}
                  src={image.url}
                  alt={image.category}
                  width={200}
                  height={200}
                />
              </div>
            ))}
      </section>
    </>
  );
}

