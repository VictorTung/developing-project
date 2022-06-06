import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addToCart, selectCartItem } from "../../store/reducerSlices/cartReducer";
import Button from "../button/Button";
import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const stateCartItem = useSelector(selectCartItem);
  const { name, price, imageUrl } = product;

  return (
    <div className="product-container relative flex flex-col justify-center items-center ">
      <img
        src={imageUrl}
        alt={`${name}`}
        className="object-cover w-full h-[300px] hover:shadow-lighten"
      />
      <div className="flex justify-between w-full text-base">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <Button
        button_type="inverted"
        className="absolute w-[60%] bottom-10 hidden"
        onClick={() => dispatch(addToCart(stateCartItem, product))}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
