"use client";

import React from "react";
import styles from "../app/page.module.css";
import { fetchProductsbycategory } from "@/app/products/page";

const Filterbar = ({ categories }) => {
  return (
    <div className={styles.filterBarContainer}>
      {" "}
      <h2> Select Products</h2>
      <select
        onChange={fetchProductsbycategory}
        className={styles.filterBarDropdown}
      >
        <option key={"All products"} value={"All Products"}>
          All Products
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Filterbar;
