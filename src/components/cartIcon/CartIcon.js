import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCartCount,
  setShowCart,
  selectshowCart,
} from "../../store/reducerSlices/cartReducer";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function CartIcon({ clickHandler }) {
  const dispatch = useDispatch();
  const showCart = useSelector(selectshowCart);
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="relative cursor-pointer" onClick={() => dispatch(setShowCart(!showCart))}>
      <ShoppingIcon className="h-5 w-5" />
      <span className="absolute top-1 left-[50%] -translate-x-[50%] text-[10px]">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
