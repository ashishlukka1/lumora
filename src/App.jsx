import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import AuthMiddleware from "../src/AuthMiddleware.jsx";
import SignInPage from "./components/SignIn/SignInPage.jsx";
import SignUpPage from "./components/SignUp/SignUpPage.jsx";
import LectureDisplay from "./components/Display/Display";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/main",
    element: <AuthMiddleware><RootLayout /></AuthMiddleware>,
    children: [
      { path: "html", element: <AuthMiddleware><Html /></AuthMiddleware> },
      { path: "css", element: <AuthMiddleware><CSS /></AuthMiddleware> },
      { path: "bootstrap", element: <AuthMiddleware><Bootstrap /></AuthMiddleware> },
      { path: "js", element: <AuthMiddleware><Js /></AuthMiddleware> },
      { path: "react", element: <AuthMiddleware><Rjs /></AuthMiddleware> },
      { path: "mongo", element: <AuthMiddleware><Mongo /></AuthMiddleware> },
    ],
  },
  { path: "/lecture/:technology/:lectureId", element: <AuthMiddleware><LectureDisplay /></AuthMiddleware> },
  { path: "/display", element: <AuthMiddleware><LectureDisplay /></AuthMiddleware> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
  { path: "*", element: <SignedOut><RedirectToSignIn /></SignedOut> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;