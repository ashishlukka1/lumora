import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RootLayout from "./components/RootLayout"
import Home from "./components/Home/Home";
import Html from './components/Html/Html'
import CSS from './components/CSS/Css'
import Js from "./components/JS/Js";
import Mongo from './components/MONGODB/Mongo'
import Rjs from './components/REACT/Rjs'
import Bootstrap from './components/Bootstrap/Bootstrap'
import LectureDisplay from './components/Display/Display'

function App() {
    const browserRouterobject = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/main",
        element: <RootLayout/>,
        children:[
          {
            path: "html",
            element: <Html/>
          },
          {
            path: "css",
            element: <CSS/>
          },
          {
            path: "bootstrap",
            element: <Bootstrap/>
          },
          {
            path: "js",
            element: <Js/>
          },
          {
            path: "react",
            element: <Rjs/>
          },
          {
            path: "mongo",
            element: <Mongo />
          }
        ]
      },
      {
        path: "/lecture/:technology/:lectureId",
        element: <LectureDisplay />
      }
    ]);
    
    return <RouterProvider router={browserRouterobject}/>;
}

export default App