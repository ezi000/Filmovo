import { useState } from "react";
import SearchBar from "./SearchBar";
import ShowSearchResult from "./ShowSearchResult";
import getMovieList from "./moviesAPI";
import styled from "styled-components";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);

    // Funkcja wyszukiwania filmów
  const searchMovies = async (title) => {
    const moviesArr = await getMovieList(title); // Pobranie listy filmów z API
    setMovies(moviesArr); // Aktualizacja stanu listy filmów
  };
  return (
    <Body>
      <SearchBar searchMovies={searchMovies} />
      <ShowSearchResult movieList={movies} />
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
  gap: 0.6rem;
  width: 80vw;
  margin: 2rem auto;
`;

export default SearchPage;
