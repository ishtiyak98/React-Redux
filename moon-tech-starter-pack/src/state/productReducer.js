export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_START":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "FETCHING_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case "FETCHING_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "ADDING_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...action.payload],
      };
    default: {
      return state;
    }
  }
};
