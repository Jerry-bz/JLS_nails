import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menuHeader.module.css";

/**
 * @component
 * Composant qui affiche le menu
 * @param {onClose} - Fonction de Fermeture
 * @returns - MenuHeader
 */


export default function MenuHeader({ onClose }) {
  
  return (
    <>
      <div className={styles.menuHeader}>
        <div onClick={onClose} className={styles.menuHeaderClose}>
          <Image
            src="/pictures/svg/closeMenu.svg"
            alt="close-page"
            width={35}
            height={35}
          />
        </div>

        <ul className={styles.menuHeaderList} onClick={onClose}>
          <li>
            <Link href={"/"}>Accueil</Link>
          </li>
          <li>
            <Link href={"/services"}>Prestations</Link>
          </li>
          <li>
            <Link href={"/prices"}>Tarifs</Link>
          </li>
          <li>
            <Link href={"/about"}>À propos</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
