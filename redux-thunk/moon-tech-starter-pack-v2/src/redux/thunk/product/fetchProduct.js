import { loadProduct } from "../../actions/productAction";

const fetchProduct = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    console.log("data-thunk", products);

    if (products.data.length) {
      dispatch(loadProduct(products.data));
    }
  };
};

export default fetchProduct;
