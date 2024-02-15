"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuHeader from "../menu/menuHeader";
import styles from "./header.module.css";
import Link from "next/link";

/**
 * @component
 * Composant qui affiche le header
 * @returns - Header
 */

export default function Header() {
  // Etat initial du menu = Non visible
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Affiche le menu
  const showMenu = () => {
    setMenuVisible(true);
  };

  // Masque le menu
  const hideMenu = () => {
    setMenuVisible(false);
  };

  const handleKeyPress = (e) => {
    e.key === 'Enter' && showMenu()
  }
 

  return (
    <>
      <header className={styles.header}>

        <nav className={styles.headerNav}>
          <Image
            onClick={showMenu}
            onKeyDown={handleKeyPress}
            src="/pictures/svg/menu.svg"
            alt="menu"
            width={35}
            height={35}
            tabIndex={0}
          />
        </nav>
        <h1 className={styles.headerNavTitle}>
          <Link
            href={"/"}
            tabIndex={1}
            aria-label="Accueil">
            {`JLS NAIL\'s`}
          </Link>
        </h1>
      </header>
      {isMenuVisible && <MenuHeader onClose={hideMenu} />}
    </>
  );
}
