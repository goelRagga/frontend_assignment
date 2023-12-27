import React from "react";
import ProductCard from "@/components/ProductCard";
import {
  getProductByCategory,
  getProductCategories,
  getProducts,
} from "@/lib/Products";
import styles from "../page.module.css";
import Banner from "@/components/Banner";
import Filterbar from "@/components/Filterbar";

export async function fetchProductsbycategory(e) {
  const data = await getProductByCategory(e.target.value);
  const filteredProducts = data.products;
  console.log("DATA", filteredProducts);
}

const Products = async () => {
  const products = await getProducts();
  const categories = await getProductCategories();

  return (
    <div className={styles.productsContainer}>
      {/* Products Listing */}
      <Banner image="/assets/ProductBanner.svg" title={"Products"}></Banner>
      <Filterbar categories={categories} />

      <div className={styles.productsList}>
        {products.map((obj, index) => {
          return <ProductCard data={obj} key={index} />;
        })}
      </div>
    </div>
  );
};
export default Products;
