import React from "react";
import styles from "./services.module.css";
import PicturesGallery from "../components/services/picturesGallery";

export const metadata = {
  title: "Prestations de prothésie ongulaire - JLS Nail's",
  description: "Des exemples de prestations chez JLS Nail's pour prendre soins et sublimer vos ongles",
};


/**
 * @component
 * @returns {Component} - ServicesPages
 */

export default function ServicesPage() {
  return (
    <>
      <main className={styles.mainServices}>
        <PicturesGallery />
      </main>
    </>
  );
}
