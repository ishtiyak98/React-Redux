import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../state/productReducer";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCHING_START" });
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "FETCHING_SUCCESS", payload: data }))
      .catch(() => {
        dispatch({ type: "FETCHING_ERROR" });
      });
  }, []);

  const product_value = {
    ...products,
    dispatch,
  };
  return (
    <PRODUCT_CONTEXT.Provider value={product_value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
