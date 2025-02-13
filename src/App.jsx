import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home/Home";
import Html from "./components/Html/Html";
import CSS from "./components/CSS/Css";
import Js from "./components/JS/Js";
import Mongo from "./components/MONGODB/Mongo";
import Rjs from "./components/REACT/Rjs";
import Bootstrap from "./components/Bootstrap/Bootstrap";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import AuthMiddleware from "./AuthMiddleware.jsx";
import SignInPage from "./components/SignIn/SignInPage.jsx";
import SignUpPage from "./components/SignUp/SignUpPage.jsx";
import LectureDisplay from "./components/Display/Display";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/main" element={<AuthMiddleware><RootLayout /></AuthMiddleware>}>
          <Route path="html" element={<AuthMiddleware><Html /></AuthMiddleware>} />
          <Route path="css" element={<AuthMiddleware><CSS /></AuthMiddleware>} />
          <Route path="bootstrap" element={<AuthMiddleware><Bootstrap /></AuthMiddleware>} />
          <Route path="js" element={<AuthMiddleware><Js /></AuthMiddleware>} />
          <Route path="react" element={<AuthMiddleware><Rjs /></AuthMiddleware>} />
          <Route path="mongo" element={<AuthMiddleware><Mongo /></AuthMiddleware>} />
        </Route>
        <Route path="/lecture/:technology/:lectureId" element={<AuthMiddleware><LectureDisplay /></AuthMiddleware>} />
        <Route path="/display" element={<AuthMiddleware><LectureDisplay /></AuthMiddleware>} />
        <Route path="*" element={<SignedOut><RedirectToSignIn /></SignedOut>} />
      </Routes>
    </Router>
  );
}

export default App;
