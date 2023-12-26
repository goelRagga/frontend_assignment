"use client";
import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";

const CarouselProductCard = ({ data, key }) => {
  console.log("dATA", data);
  return (
    <div key={key} className={styles.carouselProductCard}>
      <Image src={data?.thumbnail} width={250} height={200} alt="Thumbnail" />
      <div className={styles.carouselProductCardDetails}>
        <strong>{data.brand}</strong>
        <p>{data.title}</p>
        <strong> ${data.price}</strong>
        <StarRating totalStars={5} initialRating={Math.floor(data.rating)} />
      </div>
    </div>
  );
};

export default CarouselProductCard;
