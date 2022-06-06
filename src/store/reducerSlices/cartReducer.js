// select
import { createSelector } from "reselect";

// types
const CART_ACTION_TYPES = {
  SET_CART_ITEM: "cart/SET_CART_ITEM",
  SET_SHOW_CART: "cart/SET_SHOW_CART",
};

// reducer
const INITIAL_STATE = {
  showCart: false,
  cartItem: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return { ...state, cartItem: payload };

    case CART_ACTION_TYPES.SET_SHOW_CART:
      return {
        ...state,
        showCart: payload,
      };
    default:
      return state;
  }
};

// select
const selectCartReducer = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItem
);

export const selectCartCount = createSelector([selectCartItem], (cartItem) =>
  cartItem.reduce((prev, product) => prev + product.quantity, 0)
);

export const selectCartTotalPrice = createSelector([selectCartItem], (cartItem) =>
  cartItem.reduce((prev, product) => prev + product.quantity * product.price, 0)
);

export const selectshowCart = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.showCart
);

// action
export const setShowCart = (boolean) => {
  return { type: CART_ACTION_TYPES.SET_SHOW_CART, payload: boolean };
};

export const addToCart = (cartItem, productToAdded) => {
  const cartItemCopy = [...cartItem];
  const includeIndicator = cartItemCopy.some((item) => {
    if (item.id === productToAdded.id) {
      item.quantity += 1;
      return true;
    }
  });

  if (includeIndicator) {
    return { type: CART_ACTION_TYPES.SET_CART_ITEM, payload: cartItemCopy };
  } else {
    return {
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: [...cartItemCopy, { ...productToAdded, quantity: 1 }],
    };
  }
};

export const removeFromCart = (cartItem, cartItemToRemove) => {
  const newCartItem = cartItem.filter((item) => item.id !== cartItemToRemove.id);

  return { type: CART_ACTION_TYPES.SET_CART_ITEM, payload: newCartItem };
};

export const increaseItemCount = (cartItem, productToIncreaseQuantity) => {
  const newCartItem = cartItem.map((item) => {
    if (item.id === productToIncreaseQuantity.id) {
      item.quantity++;
    }
    return item;
  });

  return { type: CART_ACTION_TYPES.SET_CART_ITEM, payload: newCartItem };
};

export const decreaseItemCount = (cartItem, productToDecreaseQuantity) => {
  const newCartItem = cartItem.map((item) => {
    if (item.id === productToDecreaseQuantity.id) {
      item.quantity > 0 ? item.quantity-- : (item.quantity = 0);
    }
    return item;
  });

  return { type: CART_ACTION_TYPES.SET_CART_ITEM, payload: newCartItem };
};
