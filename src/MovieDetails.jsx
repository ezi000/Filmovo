import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledAuthBody } from "./authStyles";
import BasicRating from "./BasicRating";
import styled from "styled-components";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams(); // Pobieramy identyfikator filmu z adresu URL
  const [movieDetails, setMovieDetails] = useState(null); // Stan przechowujący szczegóły filmu

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
    <StyledAuthBodyForMovieDetails>
      {movieDetails ? (
        <Content>
          <MoviePoster
            src={movieDetails.primaryImage.url}
            alt={`${movieDetails.titleText?.text} poster`}
          />
          <MovieInfo>
            <h1>{movieDetails.titleText?.text}</h1>
            <p>Release Year: {movieDetails.releaseYear?.year}</p>
            <BasicRating />
          </MovieInfo>
        </Content>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </StyledAuthBodyForMovieDetails>
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
  max-height: 30rem;
  max-width: 20rem;
  margin-top: 5rem;
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
  max-width: 5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }

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

export default MovieDetails;
