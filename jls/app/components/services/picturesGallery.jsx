"use client";

import React, { useState, useEffect, useReducer } from "react";
import Image from "next/image";
import styles from "./picturesGallery.module.css";
import LightboxService from "../lightbox/service";
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
      type: "Tous",
    });
  }, []);

  // Fonction pour ouvrir la lightbox et envoyer idImage
  const openLightbox = (element) => {
    setShowLightbox(true);
    dispatch({
      // Nom de la Catégorie
      type: "Image",
      // donées envoyé au state
      payload: element,
    });
  };

  // Fonction pour fermer la lightbox
  const closeLightbox = () => {
    setShowLightbox(false);
  };

  // Fonction pour afficher l'information
  const getInformation = () => {
    setShowInformation((prev) => !prev);
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
            <div className={styles.servicesContainerButton}>
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
            </div>
            <div className={styles.servicesContainerButton}>
              {currentCategory === "Extension" && (
                <Image
                  onClick={() =>
                    window.alert(
                      "L'extension d'ongles en gel consiste à rallonger vos ongles si vous les trouvez trop courts, cassants, dédoublés, si vous les rongez, ou tout simplement parce que vous ne parvenez pas à les faire pousser."
                    )
                  }
                  src="/pictures/svg/infos.svg"
                  width={20}
                  height={20}
                  alt="logo-information"
                />
              )}
              <button
                className={
                  currentCategory === "Extension"
                    ? styles.activeButton
                    : styles.inactiveButton
                }
                onClick={() => changeCategory("Extension")}
              >
                extension
              </button>
            </div>
            <div className={styles.servicesContainerButton}>
              {currentCategory === "Gel" && (
                <Image
                  onClick={() =>
                    window.alert(
                      "Le renforcement de l'ongle naturel est aussi connu sous le nom de Gainage ou pose de gel sur les ongles naturels. Cette technique consiste à poser du gel sur la longueur naturelle des ongles."
                    )
                  }
                  src="/pictures/svg/infos.svg"
                  width={20}
                  height={20}
                  alt="logo-information"
                />
              )}
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
            </div>
            <>
              <div className={styles.servicesContainerButton}>
                {currentCategory === "VSP" && (
                  <Image
                    onClick={() =>
                      window.alert(
                        "Le vernis Semi-permanent (VSP) est composé d'un gel acrylique pigmenté qui s'applique au pinceau, de la même manière qu'un vernis classique. Il a une tenue de plus ou moins 4 semaines."
                      )
                    }
                    src="/pictures/svg/infos.svg"
                    width={20}
                    height={20}
                    alt="logo-information"
                  />
                )}
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
              </div>
            </>
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
                      alt={`Prestation ${image.id}`}
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
                    alt={`Prestation ${image.id}`}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
          {/* Affichage de la lightbox si showLightbox est vrai */}
          {showLightbox && (
            <LightboxService close={closeLightbox} dataComponent={dataState} />
          )}
        </section>
      </div>
    </>
  );
}
