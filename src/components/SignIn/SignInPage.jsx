import React from "react";
import { SignIn } from "@clerk/clerk-react";
import './SignIn.css'

const SignInPage = () => {
  return (
    <div className="box">
      <SignIn
      />
    </div>
  );
};

export default SignInPage;