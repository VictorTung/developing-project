import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import { selectCurrentUser } from "../../store/reducerSlices/userReducer";

import logo from "./logo.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cartIcon/CartIcon";
import CartDropDown from "../../components/cartDropDown/CartDropDown";

function Naviagion() {
  console.log("navigation render/rerender");
  const currentUser = useSelector(selectCurrentUser);
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-10">
        <div className="px-10">
          <nav className="flex items-center max-w-7xl mx-auto h-20 top-0 left-0 z-10 bg-white relative">
            <Link to="/">
              <img src={logo} alt="" className="h-20 w-20" />
            </Link>
            <ul className="flex ml-auto">
              <li className="mr-1">
                <Link className="p-2" to="/shop">
                  SHOP
                </Link>
              </li>
              <li className="mr-1">
                <Link className="p-2" to="/contact">
                  CONTACT
                </Link>
              </li>
              {currentUser ? (
                <li className="mr-1 cursor-pointer" onClick={signOutHandler}>
                  <span className="p-2">Sign out</span>
                </li>
              ) : (
                <>
                  <li className="mr-1">
                    <Link className="p-2" to="/auth">
                      SIGN IN
                    </Link>
                  </li>
                </>
              )}
              <li>
                <CartIcon />
              </li>
            </ul>
            <CartDropDown />
          </nav>
        </div>
      </div>
      <div className="mt-20 -6xl mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default Naviagion;
