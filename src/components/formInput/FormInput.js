import React from "react";
import "./FormInput.css";

function FormInput({ label, inputOptions }) {
  return (
    <div className="form-input-container relative mb-6 ml-2 z-0">
      <input
        className="form-input block border-b-2 solid border-b-black w-full  outline-none text-lg z-10 relative bg-transparent"
        {...inputOptions}
        autoComplete="none"
      />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink text-1 -translate-y-6" : ""
          } form-input-label text-gray-500 absolute text-lg transition-all top-0 z-0`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
