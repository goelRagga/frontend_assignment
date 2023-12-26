import { getProductById } from "@/lib/Products";
import React from "react";

import Banner from "@/components/Banner";

const ProductDetails = async ({ params }) => {
  const productData = await getProductById(params.productId);
  console.log("Product Data", productData);
  return (
    <div>
      <Banner image="/assets/ProductDetailsBanner.svg">
        ProductDetails of ID: {params.productId}
      </Banner>
    </div>
  );
};

export default ProductDetails;
