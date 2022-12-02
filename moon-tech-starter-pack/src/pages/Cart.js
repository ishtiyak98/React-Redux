import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  const { cart, dispatch } = useProducts();
  let content = "";
  let remaining = [];

  if (cart) {
    content = cart.map((product) => (
      <div className="space-y-6">
        <ProductCard key={product.model} product={product} />
        <button
          className="bg-red-500 px-6 py-2 text-white rounded-xl w-full"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: cart.filter((item) => item.model !== product.model),
            })
          }
        >
          Remove
        </button>
      </div>
    ));
  }

  console.log(cart)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Cart;


