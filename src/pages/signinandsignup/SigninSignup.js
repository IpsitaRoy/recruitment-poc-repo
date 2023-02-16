import React from "react";
import Signin from "../../components/Signin";
import Signup from "../../components/Signup";
import "./signin-signup.scss";

const SigninSignup = () => {
  return (
    <div className="sign-in-and-sign-up row">
      <div className="col-xl-6 col-lg-6 col-md-12">
        <Signin />
      </div>
      <div className="separator"></div>
      <div className="col-xl-6 col-lg-6 col-md-12">
        <Signup />
      </div>
    </div>
  );
};

export default SigninSignup;