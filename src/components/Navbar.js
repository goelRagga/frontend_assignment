"use client";

import React from "react";

import Image from "next/image";
import styles from "../app/page.module.css";
import { useRouter } from "next/navigation";

const Navbar = ({}) => {
  const router = useRouter();

  return (
    <div className={styles.navbarContainer}>
      <Image
        src="/assets/LOGO.svg"
        width={100}
        height={100}
        alt="Navbar Logo"
      />
      <div className={styles.navbarButtonsContainer}>
        <button
          className={styles.navbarButton}
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <button
          className={styles.navbarButton}
          onClick={() => router.push("/products")}
        >
          Products
        </button>
      </div>
    </div>
  );
};
export default Navbar;
