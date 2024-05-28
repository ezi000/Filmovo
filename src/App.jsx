import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function App() {
  return (
    <>
      <StyledBody>
        <H1>Filmovo.</H1>
        <Buttons>
          <Link to="login">
            <StyledButton variant="contained">Log In</StyledButton>
          </Link>
          <Link to="ratedmovies">
            <StyledRatedButton variant="contained" startIcon={<StarHalfIcon />}>
              Rated movies
            </StyledRatedButton>
          </Link>
          <Link to="register">
            <StyledButton variant="contained">Sign Up</StyledButton>
          </Link>
        </Buttons>
      </StyledBody>
    </>
  );
}

const StyledRatedButton = styled(Button)`
  background-color: #606c38 !important;
  font-family: "Mirador-BoldDEMO" !important;
  font-size: 1.3rem !important;
  @media screen and (max-width: 768px) {
    font-size: 1rem !important;
  }
`;

const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #c79470;
    background-color: #cea6a9;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const H1 = styled.h1`
  margin: 0;
  user-select: none;
  color: #586731;
  margin: 0 0 3rem 0;
  font-size: 14rem;
  @media screen and (max-width: 1024px) {
    font-size: 10rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 8rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 5rem;
  }
`;

const StyledBody = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Mirador-BoldDEMO";
`;

export default App;
