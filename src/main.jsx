import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import SearchPage from "./SearchPage.jsx";
import GlobalFonts from "./assets/globalStyles";
import MovieDetails from "./MovieDetails.jsx";
import RatedMovies from "./RatedMovies.jsx";
import { UserContext } from "./userContext.js";
import { getUser } from "./getUser.js";

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
  {
    path: "ratedmovies",
    element: <RatedMovies />,
  },
]);

export function AppWrapper() {
  const [user, setUser] = useState(null);

  const value = { user, getUser, setUser };

  return (
    <React.StrictMode>
      <GlobalFonts />
      <UserContext.Provider value={value}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
