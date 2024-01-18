"use client";

import React, { useState, useEffect, useReducer } from "react";
import Image from "next/image";
import styles from "./picturesGallery.module.css";
import Lightbox from "../lighbox/lightbox";
import { dataImgReducer, data } from "../../state/globalSate";


/**
 * @component
 * Component qui affiche les images des prestations
 * @returns - PicturesGallery
 */

export default function PicturesGallery() {
  // État initial de l'affichage du menu = false
  const [showLightbox, setShowLightbox] = useState(false);

  // Catégorie initiale 
  const [currentCategory, setCurrentCategory] = useState("Tous");

  // Utilisation du hook useReducer pour l"état globale de l'application
  const [dataState, dispatch] = useReducer(dataImgReducer, data);

  // Effet pour initialiser la catégorie actuelle à "Tous" lors du montage du composant
  useEffect(() => {
    setCurrentCategory("Tous");
    dispatch({
      // Nom de la Catégorie
      type: 'Tous'
    });
  }, []);



  // Fonction pour ouvrir la lightbox et envoyer idImage
  const openLightbox = (element) => {
    setShowLightbox(true);
    dispatch({
      // Nom de la Catégorie
      type: 'Image',
      // donées envoyé au state
      payload: element,
    });
  };

  // Fonction pour fermer la lightbox
  const closeLightbox = () => {
    setShowLightbox(false);
  };

  // Fonction pour changer de catégory
  const changeCategory = (caterogy) => {
    setCurrentCategory(caterogy);
    dispatch({
      // Nom de la Catégorie
      type: caterogy,
      // donées envoyé au state
      payload: data[caterogy],
    });
  };



  return (
    <>
      <div className={styles.services}>
      {/* Boutons pour sélectionner la catégorie */}
      <div className={styles.servicesMenu}>
        <section className={styles.servicesMenuButton}>
          <button
            className={
              currentCategory === "Tous"
                ? styles.activeButton
                : styles.inactiveButton
            }
            onClick={() => changeCategory("Tous")}
          >
            Tous
          </button>
          <button
            className={
              currentCategory === "Chablon"
                ? styles.activeButton
                : styles.inactiveButton
            }
            onClick={() => {
              changeCategory("Chablon");
            }}
          >
            Chablon
          </button>
          <button
            className={
              currentCategory === "Gel"
                ? styles.activeButton
                : styles.inactiveButton
            }
            onClick={() => changeCategory("Gel")}
          >
            Gel sur ongle naturel
          </button>
          <button
            className={
              currentCategory === "VSP"
                ? styles.activeButton
                : styles.inactiveButton
            }
            onClick={() => changeCategory("VSP")}
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
                  onClick={() => openLightbox(image.id)}
                  className={styles.servicesImg}
                  src={image.url}
                  alt={`Prestation ${image.category}`}
                  width={200}
                  height={200}
                />
              </div>
            ))
          : data[currentCategory].map((image) => (
            <div key={image.id}>
              <Image
                onClick={() => openLightbox(image.id)}
                className={styles.servicesImg}
                src={image.url}
                alt={`Prestation ${image.category}`}
                width={200}
                height={200}
              />
            </div>
          ))}
        {/* Affichage de la lightbox si showLightbox est vrai */}
        {showLightbox && <Lightbox close={closeLightbox} dataComponent={dataState} />}
      </section>
      </div>
    </>
  );
}
