import SignUpForm from "../../components/signUpForm/SignUpForm";
import SignInForm from "../../components/signInForm/SignInForm";

function Authentication() {
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   })();
  // }, []);

  return (
    <div className="flex justify-center flex-col md:flex-row max-w-7xl mx-auto">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInwithGoogleRedirect}>
        sign in with google redirect
      </button> */}
    </div>
  );
}

export default Authentication;
