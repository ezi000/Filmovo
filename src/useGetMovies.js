import { useEffect, useState } from "react";

export const useGetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
        fetch("https://localhost:3000/movies/getMoviesList")
          .then((response) => response.json())
          .then((data) => {
            const moviesList = data.movies.map((movie) => {
              return {
                id: movie._id,
                title: movie.title,
                poster: movie.poster,
                rating: movie.rating,
                who_added: movie.who_added,
              };
            });
            setMovies(moviesList);
            setLoading(false);
          });
  }, []);
  return { movies, loading };
};