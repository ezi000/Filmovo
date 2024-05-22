import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import SearchPage from "./SearchPage.jsx";
import GlobalFonts from "./assets/globalStyles";
import MovieDetails from "./MovieDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "/search/details/:id",
    element: <MovieDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalFonts />
    <RouterProvider router={router} />
  </React.StrictMode>
);
