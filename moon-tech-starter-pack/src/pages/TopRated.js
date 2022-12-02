import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const { products, loading, error, dispatch } = useProducts();
  let content = "";

  if (loading) {
    content = <p>Loading</p>;
  }
  if (error) {
    content = <p>Something is wrong</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show</p>;
  }
  if (!loading && !error && products.length) {
    content = products
      .filter((product) => product.rating >= 5)
      .map((product) => <ProductCard key={product.model} product={product} />);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default TopRated;
