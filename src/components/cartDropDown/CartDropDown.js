import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItem, selectshowCart } from "../../store/reducerSlices/cartReducer";
import Button from "../button/Button";
import CartItem from "../../components/cartItem/CartItem";

function CartDropDown() {
  const showCart = useSelector(selectshowCart);
  const cartItem = useSelector(selectCartItem);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <>
      {showCart && (
        <div className="bg-white border-solid border-2 border-black h-80 w-60 absolute top-16 right-0 z-20 flex flex-col justify-center items-center">
          <div className="h-4/6 w-full px-4 overflow-y-auto">
            {cartItem.length ? (
              cartItem.map((prodcut) => <CartItem prodcut={prodcut} key={prodcut.id} />)
            ) : (
              <div className="text-center text-lg">Empty Cart</div>
            )}
          </div>
          <Button className="mt-4" onClick={goToCheckoutHandler}>
            GO TO CHECKOUT
          </Button>
        </div>
      )}
    </>
  );
}

export default CartDropDown;
