import { BRAND_SWITCH, STOCK_CHECK } from "../actionTypes/actionTypes";

const initialState = {
  filters: {
    stock: false,
    brands: {
      amd: false,
      intel: false,
    },
  },
  keywords: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOCK_CHECK:
      return {
        ...state,
        filters: {
          ...state.filters,
          stock: !state.filters.stock,
        },
      };
    case BRAND_SWITCH:
      if (action.payload === "AMD") {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: {
              amd: !state.filters.brands.amd,
              intel: false,
            },
          },
        };
      } else {
        return {
          ...state,
          filters: {
            ...state.filters,
            brands: {
              amd: false,
              intel: !state.filters.brands.intel,
            },
          },
        };
      }
    default:
      return state;
  }
};

export default filterReducer;
