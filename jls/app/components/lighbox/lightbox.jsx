import React, { useEffect, useState } from "react";
import styles from "./lightbox.module.css";
import Image from "next/image";

/**
 * @component
 * Composant qui affiche la lightbox
 * @param {close} - Fonction de fermeture
 * @param {dataComponent} - Etat global de l'application
 * @returns - Lightbox
 */


function Lightbox({ close, dataComponent }) {

  // Récupère l'image de la Lightbox et le store
  const { idImg, dataImg } = dataComponent;



  // Récupere l'index de l'image de la lightbox
  const initialIndex = dataImg.findIndex((element) => element.id === idImg);

  // Index initial 
  const [index, setIndex] = useState(initialIndex);


  // Image précedente 
  const handlePrevious = () => {
    setIndex((prev) => {
      if (index > 0) {
        return prev - 1
      }
      return dataImg.length - 1
    });
  }

  // Image suivante
  const handleNext = () => {
    setIndex((prev) => {
      if (prev < dataImg.length - 1) {
        return prev + 1;
      }
      return 0;
    });
  }


  return (
    <div className={styles.lightbox}>
      <Image
        // On ajoute la fonction de fermeture
        onClick={close}
        className={styles.lightboxClose}
        src="/pictures/svg/closeMenu.svg"
        alt="fermeture de la lightbox"
        width={50}
        height={50}
      />
      <Image
        className={styles.lightboxImg}
        src={dataImg[index].url}
        alt={`Prestation ${dataImg[index].category}`}
        width={800}
        height={800}
      />
      <Image
        className={styles.lightboxLeft}
        // Fonction Image precedente
        onClick={handlePrevious}
        src="/pictures/svg/leftLightbox.svg"
        alt="prestation precédente"
        width={50}
        height={50}
      />
      <Image
        className={styles.lightboxRight}
        // Fonction Image suivante
        onClick={handleNext}
        src="/pictures/svg/rightLightbox.svg"
        alt="prestation suivante"
        width={50}
        height={50}
      />
    </div>
  );
}

export default Lightbox;
