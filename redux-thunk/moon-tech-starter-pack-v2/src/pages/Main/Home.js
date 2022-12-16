import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import {
  checkAMD,
  checkIntel,
  checkStock,
} from "../../redux/actions/filterActions";
import { loadProduct } from "../../redux/actions/productAction";
import fetchProduct from "../../redux/thunk/product/fetchProduct";

const Home = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { stock, brands } = state.filterReducer.filters;
  const activeClass = "text-white bg-indigo-500 border-white";

  console.log(state);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  let content;

  if (products.length) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    );
  }

  if (products.length && stock) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {products
          .filter((product) => product.status === true)
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    );
  }

  if (products.length && brands.amd === true) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {products
          .filter((product) => {
            if (stock) {
              return product.brand === "amd" && product.status === true;
            } else {
              return product.brand === "amd";
            }
          })
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    );
  }

  if (products.length && brands.intel === true) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {products
          .filter((product) => {
            if (stock) {
              return product.brand === "intel" && product.status === true;
            } else {
              return product.brand === "intel";
            }
          })
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    );
  }

  console.log(stock, brands);
  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock && activeClass
          }`}
          onClick={() => dispatch(checkStock())}
        >
          In Stock
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.amd && activeClass
          }`}
          onClick={() => dispatch(checkAMD())}
        >
          AMD
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.intel && activeClass
          }`}
          onClick={() => dispatch(checkIntel())}
        >
          Intel
        </button>
      </div>
      {content}
    </div>
  );
};

export default Home;
