import { useEffect, useState } from "react";

// Własny hook do pobierania listy filmów.
export const useGetMovies = (refreshKey) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Efekt do pobierania listy filmów
  useEffect(() => {
        fetch("https://localhost:3000/movies/getMoviesList")
          .then((response) => response.json())
          .then((data) => {
            // Mapowanie pobranych danych do oczekiwanego formatu
            const moviesList = data.movies.map((movie) => {
              return {
                id: movie._id,
                title: movie.title,
                poster: movie.poster,
                rating: movie.rating,
                who_added: movie.who_added,
              };
            });
            // Ustawienie listy filmów oraz aktualizacja statusu ładowania
            setMovies(moviesList);
            setLoading(false);
          });
  }, [refreshKey]);
  return { movies, loading };
};