import { useState } from "react";
import SearchBar from "./SearchBar";
import ShowSearchResult from "./ShowSearchResult";
import getMovieList from "./moviesAPI";
import "./search-page.css";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const moviesArr = await getMovieList(title);
    setMovies(moviesArr);
  };

  return (
    <div className="body">
      <SearchBar searchMovies={searchMovies} />
      <ShowSearchResult movieList={movies} />
    </div>
  );
};
export default SearchPage;
