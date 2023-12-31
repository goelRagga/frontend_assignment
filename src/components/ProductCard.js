"use client";
import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ data, key }) => {
  return (
    <div key={key} className={styles.productCard}>
      <div className={styles.productCardHeader}>
        <span className={styles.goldenChip}>Random</span>
        <Image src="/assets/Heart.svg" width={30} height={30} alt="Favourite" />
      </div>
      <div className={styles.productCardContent}>
        <Image
          className={styles.productImage}
          src={data.thumbnail}
          width={80}
          height={80}
          alt="Thumbnail"
        />
        <div className={styles.productDetails}>{data.title}</div>
        <Link href={`/products/${data.id}`}>
          <button className={styles.pinkButton}>
            <span className={styles.pinkButtonText}>View</span>
            <Image
              className={styles.arrowBlack}
              src="/assets/ArrowBlack.svg"
              width={30}
              height={30}
              alt="Arrow"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
