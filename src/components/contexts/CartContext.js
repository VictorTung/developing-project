import { createContext, useState, useEffect, useReducer } from "react";

export const CartContext = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItem: [],
  addToCart: () => {},
  removeFromCart: () => {},
  cartCount: 0,
  increaseItemCount: () => {},
  decreaseItemCount: () => {},
  totalPrice: 0,
});

const CART_ACTION_TYPES = {
  SET_CART: "SET_CART_ITEM",
  SET_SHOW_CART: "SET_SHOW_CART",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_SHOW_CART:
      return {
        ...state,
        showCart: payload,
      };
    default:
      throw new Error(`Unhandled type: ${type} in CarReducer `);
  }
};

const INITIAL_STATE = {
  showCart: false,
  cartItem: [],
  cartCount: 0,
  totalPrice: 0,
};

export function CartProvider({ children }) {
  const [{ showCart, cartItem, cartCount, totalPrice }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  const addToCart = (productToAdded) => {
    const cartItemCopy = [...cartItem];
    const includeIndicator = cartItemCopy.some((item) => {
      if (item.id === productToAdded.id) {
        item.quantity += 1;
        return true;
      }
    });
    if (includeIndicator) {
      updateCartItem([...cartItemCopy]);
    } else {
      updateCartItem([...cartItemCopy, { ...productToAdded, quantity: 1 }]);
    }
  };

  const removeFromCart = (cartItemToRemove) => {
    const newCartItem = cartItem.filter(
      (item) => item.id !== cartItemToRemove.id
    );
    updateCartItem(newCartItem);
  };

  const increaseItemCount = (productToIncreaseQuantity) => {
    const newCartItem = cartItem.map((item) => {
      if (item.id === productToIncreaseQuantity.id) {
        item.quantity++;
      }
      return item;
    });
    updateCartItem(newCartItem);
  };

  const decreaseItemCount = (productToDecreaseQuantity) => {
    const newCartItem = cartItem.map((item) => {
      if (item.id === productToDecreaseQuantity.id) {
        item.quantity > 0 ? item.quantity-- : (item.quantity = 0);
      }
      return item;
    });
    updateCartItem(newCartItem);
  };

  const updateCartItem = (newCartItem) => {
    const newCartCount = cartItem.reduce(
      (prev, product) => prev + product.quantity,
      0
    );

    const newTotalPrice = cartItem.reduce(
      (prev, product) => prev + product.quantity * product.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: {
        cartItem: newCartItem,
        cartCount: newCartCount,
        totalPrice: newTotalPrice,
      },
    });
  };

  const setShowCart = (boolean) => {
    dispatch({ type: CART_ACTION_TYPES.SET_SHOW_CART, payload: boolean });
  };

  const values = {
    showCart,
    setShowCart,
    cartItem,
    addToCart,
    removeFromCart,
    cartCount,
    increaseItemCount,
    decreaseItemCount,
    totalPrice,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
