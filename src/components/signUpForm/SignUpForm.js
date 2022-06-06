import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });

      setFormField(defaultFormFields);

      console.log("success");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encounter an error", error);
      }
    }
  };

  return (
    <div className="w-11/12 md:w-5/12 mx-auto">
      <h1 className="text-4xl mt-4 mb-5 font-bold tracking-tighter">
        Don't have an account?
      </h1>
      <span className="text-lg mb-11 block">
        Sign up with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            onChange: handleChange,
            value: displayName,
            required: true,
            name: "displayName",
            type: "text",
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            onChange: handleChange,
            value: email,
            required: true,
            name: "email",
            type: "email",
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            onChange: handleChange,
            value: password,
            required: true,
            name: "password",
            type: "password",
            minLength: "6",
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            onChange: handleChange,
            value: confirmPassword,
            required: true,
            name: "confirmPassword",
            type: "password",
            minLength: "6",
          }}
        />

        <Button type="submit" button_type="">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUpForm;
