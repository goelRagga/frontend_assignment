import React from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/Products";
import styles from "../page.module.css";
import Banner from "@/components/Banner";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className={styles.productsContainer}>
      {/* Products Listing */}
      <Banner image="/assets/ProductBanner.svg" title={"Products"}></Banner>
      <h2>Select Products</h2>
      <div className={styles.productsList}>
        {products.map((obj, index) => {
          return <ProductCard data={obj} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Products;
