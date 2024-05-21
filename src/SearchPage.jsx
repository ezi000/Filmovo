import { useState } from "react";
import SearchBar from "./SearchBar";
import ShowSearchResult from "./ShowSearchResult";
import getMovieList from "./moviesAPI";
import styled from "styled-components";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setselectedMovie] = useState({});

  const searchMovies = async (title) => {
    const moviesArr = await getMovieList(title);
    setMovies(moviesArr);
  };

  const handleSearch = (movie) => { setselectedMovie(movie) }


  return (
    <Body>
      <SearchBar searchMovies={searchMovies} />
      <ShowSearchResult movieList={movies} />
    </Body>
    // W podobny sposob przekazac z komponentu przekazac obiekt filmu
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
  gap: 0.6rem;
  width: 80vw;
  margin: 5rem auto;
`;

export default SearchPage;
