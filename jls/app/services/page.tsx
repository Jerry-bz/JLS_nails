import React from "react";
import styles from "./services.module.css";
import PicturesGallery from "../components/services/picturesGallery";

export const metadata = {
  title: "Page Prestations - JLS Nail's",
};

export default function ServicesPage() {

 

  return (
    <>
      <main className={styles.mainServices}>
        <PicturesGallery />
      </main>
    </>
  );
}
