import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const SearchBar = ({ searchMovies }) => {
  const [title, setTitle] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    searchMovies(title);
  };

  return (
    <>
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

SearchBar.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default SearchBar;
