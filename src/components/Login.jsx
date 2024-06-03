import React, { useRef, useState } from "react";
import Header from "./Header";
import Poster from "../assets/poster.jpg";
import { isValidEmail, isValidPassword } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsgEmail, setErrorMsgEmail] = useState("");
  const [errorMsgPassword, setErrorMsgPassword] = useState("");
  const [errorSignUp, setErrorSignUp] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  const handleValidation = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    let isValid = true;

    if (!isValidEmail(emailValue)) {
      setErrorMsgEmail("Invalid Email");
      isValid = false;
    } else {
      setErrorMsgEmail("");
    }

    if (!isValidPassword(passwordValue)) {
      setErrorMsgPassword("Invalid Password");
      isValid = false;
    } else {
      setErrorMsgPassword("");
    }

    if (isValid) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, "SignUP Succesfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorMessage);
          setErrorSignUp(`${errorCode}...${errorMessage}`);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="bg-[#231239] min-h-screen relative">
      <div className="absolute inset-0">
        <img
          src={Poster}
          alt="Poster"
          className="hidden sm:block object-cover w-full h-full"
        />
      </div>
      <div className="relative z-10">
        <div className="p-4">
          <Header />
        </div>
        <div className="flex flex-col items-center justify-center min-h-full p-4 sm:p-0">
          <div className="bg-[#231239] bg-opacity-90 sm:bg-opacity-80 sm:bg-[#231239] sm:rounded sm:shadow-lg p-4 sm:max-w-md w-full">
            <h1 className="text-2xl font-extrabold mb-6 text-left text-[#F4AB4F] w-full">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <form className="flex flex-col w-full" onSubmit={handleValidation}>
              {!isSignInForm && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 mb-4 w-full rounded"
                />
              )}

              <input
                type="email"
                placeholder="Email Address"
                className="p-3 mb-4 w-full rounded"
                ref={email}
              />
              {errorMsgEmail && <p className="text-red-500">{errorMsgEmail}</p>}
              <input
                type="password"
                placeholder="Password"
                className="p-3 mb-4 w-full rounded"
                ref={password}
              />
              {errorMsgPassword && (
                <p className="text-red-500">{errorMsgPassword}</p>
              )}
              <div className="flex items-center mb-6">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-white sm:text-white">
                  Remember me
                </label>
                <a href="#" className="ml-auto text-[#F4AB4F] text-sm">
                  Forgot password?
                </a>
              </div>
              {errorSignUp && <p className="text-red-500">{errorSignUp}</p>}
              <button
                className="w-full bg-[#D62176] text-white py-3 rounded mb-6"
                type="submit"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </form>
            <p className="text-white sm:text-white">
              {isSignInForm ? "New to MovieGPT?" : "Already Registered?"}
              <span
                className="text-[#F4AB4F] inline p-2 cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? "Sign up" : "Sign in"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
