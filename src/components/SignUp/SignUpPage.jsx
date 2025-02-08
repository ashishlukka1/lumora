import React from "react";
import { SignUp } from "@clerk/clerk-react";
import './SignUp.css'

const SignUpPage = () => {
  return (
    <div className="box h-50" >
        <SignUp/>
    </div>
 
  );
};

export default SignUpPage;