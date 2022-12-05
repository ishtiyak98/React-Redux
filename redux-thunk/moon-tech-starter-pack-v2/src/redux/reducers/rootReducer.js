import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  productReducer,
  filterReducer,
});

export default rootReducer;
