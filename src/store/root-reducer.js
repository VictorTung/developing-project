import { combineReducers } from "redux";

import { userReducer } from "./reducerSlices/userReducer";
import { categoryReducer } from "./reducerSlices/categoryReducer";
import { cartReducer } from "./reducerSlices/cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});
