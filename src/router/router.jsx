import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "../component/login/Login";
import Registration from "../component/registration/Registration";
import HomeLayput from "../layout/homeLayout/HomeLayout";
import Home from "../component/home/Home";
import AllReviews from "../component/allReviews/AllReviews";
import ReviewDetails from "../component/reviewDetails/ReviewDetails";
import MyReviews from "../component/myReviews/MyReviews";
import AddReviews from "../component/addReviews/AddReviews";
import Loading from "../pages/Loading";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ReviewEdit from "../component/reviewEdit/ReviewEdit";
import MyFavorite from "../component/myFavorite/MyFavorite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayput></HomeLayput>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Registration,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/allreviews",
        loader: () => fetch("http://localhost:3000/all-reviews"),
        hydrateFallbackElement: <Loading></Loading>,
        Component: AllReviews,
      },

      {
        path: "/addReviews",
        element: <AddReviews></AddReviews>,
      },

      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },

      {
        path: "/review-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-reviews/${params.id}`),
        element: (
          <PrivateRoute>
            <ReviewDetails></ReviewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-favorite-review",
        element: (
          <PrivateRoute>
            <MyFavorite></MyFavorite>
          </PrivateRoute>
        ),
      },

      {
        path: "/review-edit/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-reviews/${params.id}`),
        element: (
          <PrivateRoute>
            <ReviewEdit></ReviewEdit>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
