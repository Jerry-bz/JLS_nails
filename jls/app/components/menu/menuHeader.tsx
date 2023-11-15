import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./menuHeader.module.css";

/**
 * Composant MenuHeader - Ce composant représente un menu d'en-tête.
 *
 * @param {MenuHeaderProps} props - Les propriétés du composant MenuHeader.
 * @returns {JSX.Element} Le composant MenuHeader.
 */
interface MenuHeaderProps {
  onClose: () => void;
}

export default function MenuHeader({ onClose }: MenuHeaderProps): JSX.Element {
  return (
    <>
      <div className={styles.menuHeader}>
        <div onClick={onClose} className={styles.menuHeaderClose}>
          <Image
            src="/assets/close.svg"
            alt="close-page"
            width={25}
            height={25}
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
