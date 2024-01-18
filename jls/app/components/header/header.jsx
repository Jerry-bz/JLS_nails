"use client";
import React, { Component, useState } from "react";
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

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <Image
            onClick={showMenu}
            src="/pictures/svg/menu.svg"
            alt="menu"
            width={35}
            height={35}
          />
        </nav>
        <h1 className={styles.headerNavTitle}>
          <Link href={"/"}>{`JLS NAIL\'s`}
          </Link>
        </h1>
      </header>
      {isMenuVisible && <MenuHeader onClose={hideMenu} />}
    </>
  );
}
