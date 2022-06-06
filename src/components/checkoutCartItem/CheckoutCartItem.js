import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCartItem,
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
} from "../../store/reducerSlices/cartReducer";

import "./CheckoutCartItem.css";

function CheckoutCartItem({ cartItem }) {
  const { imageUrl, quantity, price, name } = cartItem;
  const stateCartItem = useSelector(selectCartItem);
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increaseItemCount(stateCartItem, cartItem));
  const handleDecrease = () => dispatch(decreaseItemCount(stateCartItem, cartItem));
  const handleRemove = () => dispatch(removeFromCart(stateCartItem, cartItem));

  return (
    <div className="checkoutCartItem-Container grid items-center text-lg  border-b-2 border-gray-300 border-solid py-5">
      <img src={imageUrl} alt="" className="w-11/12" />
      <span>{name}</span>
      <div>
        <button onClick={handleDecrease}>&#10094;</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={handleIncrease}>&#10095;</button>
      </div>
      <span>{price}</span>
      <button onClick={handleRemove}>&#10005;</button>
    </div>
  );
}

export default CheckoutCartItem;
