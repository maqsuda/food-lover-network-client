import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "../component/login/Login";
import Registration from "../component/registration/Registration";
import HomeLayput from "../layout/homeLayout/HomeLayout";
import Home from "../component/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayput></HomeLayput>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
