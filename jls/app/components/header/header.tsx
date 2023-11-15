"use client";
import React, { useState } from "react";
import Image from "next/image";
import MenuHeader from "../menu/menuHeader";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <Image
            onClick={showMenu}
            src="/assets/menu.svg"
            alt="menu"
            width={35}
            height={35}
          />
        </nav>
        <h1 className={styles.headerNavTitle}>{`JLS NAIL'S`}</h1>
      </header>
      {isMenuVisible && <MenuHeader onClose={hideMenu} />}
    </>
  );
}
