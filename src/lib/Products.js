export const getProducts = async () => {
  const data = await fetch("https://dummyjson.com/products ", {
    cache: "force-cache",
  });
  const products = await data.json();
  return products.products;
};

export const getProductById = async (id) => {
  const data = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  const product = await data.json();
  return product;
};
