import React from "react";
import { useSelector } from "react-redux";

import { selectCartItem, selectCartTotalPrice } from "../../store/reducerSlices/cartReducer";
import CheckoutCartItem from "../../components/checkoutCartItem/CheckoutCartItem";

import "./Checkout.css";

function Checkout() {
  const cartItem = useSelector(selectCartItem);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="checkoutHeader grid border-b-2 border-gray-300 border-solid pb-5">
        <h2 className="text-xl">Product</h2>
        <h2 className="text-xl">Description</h2>
        <h2 className="text-xl">Quantity</h2>
        <h2 className="text-xl">Price</h2>
        <div className="text-xl">Remove</div>
      </div>
      {cartItem.map((item) => (
        <CheckoutCartItem cartItem={item} key={item.id} />
      ))}
      <div className="text-xl text-right mt-4">Total: {cartTotalPrice}</div>
    </div>
  );
}

export default Checkout;
