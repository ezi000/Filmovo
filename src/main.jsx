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

/**
 * Ta część kodu tworzy instancję routera za pomocą funkcji createBrowserRouter z react-router-dom.
 * Definiuje ona ścieżki dla różnych komponentów w aplikacji.
 */
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

/**
 * To główny komponent aplikacji, który otacza całą aplikację.
 * Zarządza stanem użytkownika i udostępnia go innym komponentom za pomocą kontekstu React.
 */
export function AppWrapper() {
  const [user, setUser] = useState(null);

  const value = { user, getUser, setUser };

  // Renderuje aplikację.
  return (
    <React.StrictMode>
      <GlobalFonts />
      <UserContext.Provider value={value}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </React.StrictMode>
  );
}

// Renderuje komponent AppWrapper do elementu root w dokumencie HTML.
ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
