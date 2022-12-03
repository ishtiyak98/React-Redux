import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

export const addToCart = ({ cart, product }) => {
  const doubleProductCheck = cart.find((item) => item._id === product._id);

  if (doubleProductCheck) {
    return {
      type: ADD_TO_CART,
      payload: [
        ...cart.filter((item) => item._id !== product._id),
        { ...product, quantity: doubleProductCheck.quantity + 1 },
      ],
    };
  } else {
    return {
      type: ADD_TO_CART,
      payload: [...cart, { ...product, quantity: 1 }],
    };
  }
};

export const removeFromCart = ({ cart, product }) => {
  if (product.quantity > 1) {
    return {
      type: REMOVE_FROM_CART,
      payload: [
        ...cart.filter((item) => item._id !== product._id),
        { ...product, quantity: product.quantity - 1 },
      ],
    };
  } else {
    return {
      type: REMOVE_FROM_CART,
      payload: [...cart.filter((item) => item._id !== product._id)],
    };
  }
};
