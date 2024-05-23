import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledAuthBody, Body, StyledButton } from "./authStyles";
import styled from "styled-components";
import axios from "axios";
import Rating from "@mui/material/Rating";

function MovieDetails() {
  const { id } = useParams(); // Pobieramy identyfikator filmu z adresu URL
  const [movieDetails, setMovieDetails] = useState(null); // Stan przechowujący szczegóły filmu
  const [value, setValue] = useState(2);

  useEffect(() => {
    async function getMovieDetails() {
      const options = {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
        headers: {
          "X-RapidAPI-Key":
            "b1a45e8a00mshbd6942a92cb4229p1cbeecjsn4081074d23ae",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        if (response.status === 200) {
          setMovieDetails(response.data.results);
        } else {
          throw new Error("Failed to fetch movie details");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    getMovieDetails();
  }, [id]); // Wywołujemy ponownie efekt, gdy zmienia się identyfikator filmu

  return (
    <Body>
      <StyledAuthBodyForMovieDetails>
        {movieDetails ? (
          <Content>
            <MoviePoster
              src={movieDetails.primaryImage?.url}
              alt={`${movieDetails.titleText?.text} poster`}
            />
            <MovieInfo>
              <h1>{movieDetails.titleText?.text}</h1>
              <p>Release Year: {movieDetails.releaseYear?.year}</p>
              <RatingContainer>
                <p>Rate The Movie</p>
                <Rating
                  name="simple-controlled"
                  size="large"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </RatingContainer>
              <StyledButton
                onClick={(e) =>
                  handleAddingMovie(
                    e,
                    movieDetails.titleText?.text,
                    movieDetails.primaryImage?.url,
                    value
                  )
                }
              >
                Submit your rating
              </StyledButton>
            </MovieInfo>
          </Content>
        ) : (
          <Loading>Loading...</Loading>
        )}
      </StyledAuthBodyForMovieDetails>
    </Body>
  );
}

const StyledAuthBodyForMovieDetails = styled(StyledAuthBody)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 50%;
  height: fit-content;
  max-height: 33rem;
  max-width: 20rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const RatingContainer = styled.div`
  border-radius: 1rem;
  border: 1px dashed #213f1b;
  padding: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const MoviePoster = styled.img`
  max-width: 11rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgb(0, 0, 0);
  @media (max-width: 768px) {
    max-width: 9rem;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

const Loading = styled.h1`
  font-size: 2rem;
`;

const handleAddingMovie = (event, title, poster, rating) => {
  event.preventDefault();
  return fetch("https://localhost:3000/movies/addMovie", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      poster: poster,
      rating: rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((_data) => {
    console.log(_data);
    return _data.status;
  });
};

export default MovieDetails;
