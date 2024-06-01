import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Komponent funkcyjny do wyświetlania wyników wyszukiwania.
const ShowSearchResult = ({ movieList: initialMovieList = [] }) => {
  const [movieList, setMovieList] = useState(initialMovieList);
  const movies = useRef([]);

  // Efekt do obsługi początkowej listy filmów i pamięci lokalnej
  useEffect(() => {
    if (initialMovieList && initialMovieList.length > 0) {
      // Jeśli podana jest początkowa lista, aktualizuje filmy i pamięć lokalną
      movies.current = initialMovieList;
      localStorage.setItem("movieList", JSON.stringify(initialMovieList));
      setMovieList(initialMovieList);
    } else {
      // Jeśli lista początkowa nie jest podana, pobiera z pamięci lokalnej
      const cachedMovies = localStorage.getItem("movieList");
      if (cachedMovies) {
        const parsedMovies = JSON.parse(cachedMovies);
        movies.current = parsedMovies;
        setMovieList(parsedMovies);
      }
    }
  }, [initialMovieList]);

  return (
    <ListedMoviesBody
      style={movieList.length > 0 ? { backgroundColor: "white" } : {}}
    >
      {movieList.map((movie) => (
        <ListedMoviesButton key={movie.id}>
          <Link to={`details/${movie.id}`}>
            {movie.primaryImage !== null ? (
              <MoviePoster
                src={movie.primaryImage.url}
                alt={movie.titleText.text}
              />
            ) : (
              <MoviePoster
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                alt="placeholder image"
              />
            )}
            <div style={{ maxHeight: "10%" }}>{movie.titleText.text}</div>
            <div style={{ maxHeight: "10%" }}>
              {movie.releaseYear !== null
                ? "(" + movie.releaseYear.year + ")"
                : "(????)"}
            </div>
          </Link>
        </ListedMoviesButton>
      ))}
    </ListedMoviesBody>
  );
};
ShowSearchResult.propTypes = {
  movieList: PropTypes.array,
};

const MoviePoster = styled.img`
  max-height: 15vw;
  max-width: 11vw;
  width: auto;
  @media only screen and (max-width: 768px) {
    max-height: 20vw;
  }
`;

const ListedMoviesButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px transparent solid;
  border-radius: 0.5rem;
  height: fit-content;
  margin: 0 0 1rem 0;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  outline: none;
  transition: border-color 0.25s;
  &:hover {
    border-color: #c7947040;
  }
`;

const ListedMoviesBody = styled.div`
  font-family: "Roboto", sans-serif;
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  gap: 2%;
  padding: 2rem;
  justify-content: center;
  align-items: end;
  border-radius: 1rem;
  max-height: 400px;
  height: fit-content;

  @media only screen and (max-width: 500px) {
    max-height: 500px;
    gap: 1rem;
    max-height: 350px;
    height: 28vh;
  }
`;

export default ShowSearchResult;
