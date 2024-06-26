import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Komponent paska wyszukiwania filmów
const SearchBar = ({ searchMovies }) => {
  const [title, setTitle] = useState(""); // Stan przechowujący tytuł filmu

  // Obsługa wyszukiwania filmów
  const handleSearch = async (e) => {
    e.preventDefault(); // Zapobieganie domyślnej akcji formularza
    searchMovies(title);
  };

  return (
    <>
      <Link to="/ratedmovies">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>

      <form onSubmit={handleSearch}>
        <TextField
          sx={{ width: "100%", borderRadius: "0.8rem", padding: "0" }}
          className="input"
          placeholder="Search movies"
          color="success"
          type="text"
          value={title}
          onChange={(e) => {
            const newTitle = e.target.value;
            setTitle(newTitle);
            searchMovies(newTitle);
          }}
          InputProps={{
            style: { backgroundColor: "white" },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </>
  );
};

// Definicja wymaganych typów dla propsów komponentu
SearchBar.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default SearchBar;
