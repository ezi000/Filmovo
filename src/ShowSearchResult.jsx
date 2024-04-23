import { useRef } from "react";
import PropTypes from "prop-types";
import "./search-page.css";

ShowSearchResult.propTypes = {
  movieList: PropTypes.array,
};

const ShowSearchResult = ({ movieList }) => {
  const movies = useRef([]);
  movieList == undefined
    ? (movieList = [])
    : movieList.length == 0
    ? (movieList = movies.current)
    : (movies.current = movieList);

  return (
    <div
      className="listed-movies-body"
      style={movieList.length > 0 ? { backgroundColor: "white" } : {}}
    >
      {movieList.map((movie, index) => (
        <button className="listed-movies" key={index}>
          {movie.primaryImage !== null ? (
            <img
              style={{ height: "auto", width: "100%" }}
              src={movie.primaryImage.url}
              alt={movie.titleText.text}
            />
          ) : (
            <img
              style={{ height: "auto", width: "100%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              alt="placeholder image"
            />
          )}
          <div>{movie.titleText.text}</div>
          <div>
            {movie.releaseYear !== null
              ? "(" + movie.releaseYear.year + ")"
              : ""}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ShowSearchResult;
