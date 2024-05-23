import { useGetMovies } from "./useGetMovies";
import styled from "styled-components";
import { Body } from "./authStyles";
import Rating from "@mui/material/Rating";
import NavBar from "./NavBar";

export const RatedMovies = () => {
  const { movies, loading } = useGetMovies();

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(movies);
  return (
    <>
      <BodyBody>
        <BodyColumn>
          <NavBar />
          {movies.map((movie) => (
            <MovieBox key={movie._id}>
              <StyledH1>{movie.title}</StyledH1>
              <MovieImage src={movie.poster} alt={movie.title} />
              <StyledRating
                name="simple-controlled"
                size="medium"
                value={movie.rating}
                readOnly
              />
              <StyledParagraph>Added by: {movie.who_added}</StyledParagraph>
            </MovieBox>
          ))}
        </BodyColumn>
      </BodyBody>
    </>
  );
};

const StyledParagraph = styled.p`
  text-align: center;
`;

const StyledRating = styled(Rating)`
  &.MuiRating-root {
    @media screen and (max-width: 768px) {
      font-size: ${(props) => (props.size = "1rem")};
    }
  }
`;

const StyledH1 = styled.h1`
  width: 4rem;
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BodyBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const MovieBox = styled.div`
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.096);
  border-radius: 1rem;
  background-color: #dee1db;
  align-items: center;
  gap: 1rem;
  justify-content: space-evenly;
  width: 100%;
`;

const MovieImage = styled.img`
  width: auto;
  height: 10rem;
  margin: 1rem 0 1rem 0;
  @media screen and (max-width: 768px) {
    height: 6rem;
  }
`;

const BodyColumn = styled(Body)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
  height: fit-content;
  width: 60vw;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export default RatedMovies;
