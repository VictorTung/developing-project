import React from "react";

function CartItem({ prodcut }) {
  const { name, imageUrl, price, quantity } = prodcut;

  return (
    <div className="flex items-center my-4">
      <img src={imageUrl} alt={name} className="w-[30%] mr-4" />
      <div className="">
        <div>{name}</div>
        <div>
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
