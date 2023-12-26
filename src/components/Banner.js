"use client";
import React, { useEffect, useRef } from "react";
import styles from "../app/page.module.css";
import { startMovingTextAnimation } from "@/utils/animations";

const Banner = ({ image, title = "", children }) => {
  const text = title;
  const ref = useRef(null);

  useEffect(() => {
    startMovingTextAnimation(ref, text);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${image.src})`,
        width: "100vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 className={styles.bannerTitle} ref={ref}></h2>

      {children}
    </div>
  );
};

export default Banner;
