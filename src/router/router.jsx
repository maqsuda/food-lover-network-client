import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "../component/login/Login";
import Registration from "../component/registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration></Registration>,
  },
]);
