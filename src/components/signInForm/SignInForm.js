import { useState } from "react";
import {
  signInWithGooglePopup,
  signInwithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setFormField(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   })();
  // }, []);

  return (
    <div className="w-11/12 mb-20 mx-auto md:mr-10 md:w-5/12">
      <h1 className="text-4xl mt-4 mb-4 font-bold tracking-tighter">
        I already have an account
      </h1>
      <span className="text-lg mb-11 block">
        Sign in with your email and password
      </span>

      <form onSubmit={handleSubmit}>
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
          }}
        />

        <div className="button-group flex justify-between">
          <Button type="submit">Sign In</Button>
          <Button typs="button" button_type="google" onClick={signWithGoogle}>
            sign in google
          </Button>
        </div>
      </form>

      {/* <button onClick={signInwithGoogleRedirect}>
        sign in with google redirect
      </button> */}
    </div>
  );
}

export default SignInForm;
