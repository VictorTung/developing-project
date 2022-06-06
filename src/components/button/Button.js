import React from "react";
import "./Button.css";

const BUTTON_TYPE = {
  inverted: "inverted",
  google: "google-sign-in",
};

function Button({ children, button_type, className, ...other_props }) {
  return (
    <button
      id="button-container"
      className={`button-container ${BUTTON_TYPE[button_type]} ${className}`}
      {...other_props}
    >
      {children}
    </button>
  );
}

export default Button;
