import { BRAND_SWITCH, STOCK_CHECK } from "../actionTypes/actionTypes";

export const checkStock = () => {
  return {
    type: STOCK_CHECK,
  };
};

export const checkAMD = () => {
  return {
    type: BRAND_SWITCH,
    payload: "AMD"
  };
};

export const checkIntel = () => {
  return {
    type: BRAND_SWITCH,
    payload: "INTEL"
  };
};
