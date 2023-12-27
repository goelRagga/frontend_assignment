import { getProductById } from "@/lib/Products";
import React from "react";

import Banner from "@/components/Banner";
import CarouselProductDetails from "@/components/CarouselProductDetails";

const ProductDetails = async ({ params }) => {
  const productData = await getProductById(params.productId);
  console.log("Product Data", productData);
  return (
    <div>
      <Banner
        image="/assets/ProductDetailsBanner.svg"
        title="Product Details"
      ></Banner>
      <CarouselProductDetails product={productData} />
    </div>
  );
};

export default ProductDetails;
