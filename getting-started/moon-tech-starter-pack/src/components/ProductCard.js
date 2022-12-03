import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
} from "../redux/actionCreators/productAction";
import { ADD_TO_CART } from "../redux/actionTypes/actionTypes";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { cart } = useSelector((state) => state);

  return (
    <div
      className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900"
      key={product._id}
    >
      {pathname.includes("cart") && (
        <div className="grid place-items-center absolute top-2 right-4 bg-green-500 w-[30px] h-[30px] text-white rounded-full">
          <p>{product.quantity}</p>
        </div>
      )}

      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, index) => {
            return (
              <li className="text-sm" key={index}>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="">
        {pathname.includes("cart") ? (
          <div className="mt-5">
            <button
              className="bg-red-500 w-full rounded-full py-1 px-2 flex-1 text-white text-bold"
              onClick={() => {
                dispatch(removeFromCart({ cart, product }));
              }}
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="flex gap-2 mt-5">
            <button
              className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
              onClick={() => {
                dispatch(addToCart({ cart, product }));
              }}
            >
              Add to cart
            </button>
            <button
              title="Add to wishlist"
              className="bg-indigo-500  py-1 px-2 rounded-full"
            >
              <BiListPlus className="text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
