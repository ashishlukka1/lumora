import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import "./Auth.css";

const AuthMiddleware = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <p className="loading-text">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default AuthMiddleware;