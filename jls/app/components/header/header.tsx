"use client";
import React, { useState } from "react";
import Image from "next/image";

import MenuHeader from "../menu/menuHeader";
import styles from "./header.module.css";
import Link from "next/link";

export default function Header(): JSX.Element {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

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
        <h1 className={styles.headerNavTitle}>
          <Link href={"/"}>{`JLS NAIL'S`}</Link>
        </h1>
      </header>
      {isMenuVisible && <MenuHeader onClose={hideMenu} />}
    </>
  );
}
