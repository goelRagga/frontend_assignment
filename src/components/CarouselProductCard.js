"use client";
import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";

const CarouselProductCard = ({ data, key, productDetailsCard = false }) => {
  console.log("dATA in Product", data);
  return (
    <div
      key={key}
      className={
        productDetailsCard
          ? styles.carouselProductDetailsCard
          : styles.carouselProductCard
      }
    >
      {productDetailsCard ? (
        <Image src={data} width={150} height={200} alt="Thumbnail" />
      ) : (
        <Image src={data?.thumbnail} width={250} height={200} alt="Thumbnail" />
      )}

      {!productDetailsCard && (
        <div className={styles.carouselProductCardDetails}>
          <strong>{data.brand}</strong>
          <p>{data.title}</p>

          <strong> ${data.price}</strong>

          <StarRating totalStars={5} initialRating={Math.floor(data.rating)} />
        </div>
      )}
    </div>
  );
};

export default CarouselProductCard;
