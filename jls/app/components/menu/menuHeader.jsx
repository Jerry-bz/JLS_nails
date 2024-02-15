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
        <div onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onClose()
              }
            }} onClick={onClose} className={styles.menuHeaderClose}>
          <Image
            src="/pictures/svg/closeMenu.svg"
            alt="close-page"
            width={35}
            height={35}
            tabIndex={0}
          />
        </div>

        <ul className={styles.menuHeaderList} onClick={onClose}>
          <li>
            <Link href={"/"} aria-label="Accueil">
              Accueil
            </Link>
          </li>
          <li>
            <Link href={"/services"} aria-label="Presations">
              Prestations     
            </Link>
          </li>
          <li>
            <Link href={"/prices"} aria-label="Tarifs">
              Tarifs
            </Link>
          </li>
          <li>
            <Link href={"/contact"} aria-label="Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link onKeyDown={(e) => {
              if (e.key === 'Tab') {
                // empeche le comportement par defaut du focus
                e.preventDefault();
                const focusElement = document.querySelector(`.${styles.menuHeaderClose} img `)
                focusElement.focus()
              }
            }} href={"/about"} aria-label="À propos">
              À propos
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
