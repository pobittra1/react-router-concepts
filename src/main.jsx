import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>,
      },
      {
        path: "/posts",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
