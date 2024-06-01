import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StyledButton } from "./authStyles";
import handleLogout from "./handleLogout";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./userContext";

// Komponent paska nawigacyjnego
export const NavBar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <NavBarBody>
        <Link to="/">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        {user && <StyledWelcomeP>Welcome, {user.username}!</StyledWelcomeP>}
        <ButtonGroup>
          <Link to="/search">
            <StyledRatedButton variant="contained" startIcon={<StarHalfIcon />}>
              Add your rating
            </StyledRatedButton>
          </Link>
          {user && (
            <LogoutButton
              data-testid="logout-button"
              onClick={() => {
                handleLogout();
                setUser(null);
                navigate("/");
              }}
            >
              Log out
            </LogoutButton>
          )}
        </ButtonGroup>
      </NavBarBody>
    </>
  );
};

const StyledWelcomeP = styled.p`
  font-family: "Mirador-BoldDEMO";
  font-size: 1.5rem;
  color: #79797982;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledRatedButton = styled(Button)`
  background-color: #bc6c25 !important;
  font-family: "Mirador-BoldDEMO" !important;
  height: 3rem !important;
  width: 13rem !important;
  @media screen and (max-width: 768px) {
    font-size: 0.6rem !important;
    width: 7rem !important;
  }
`;

const NavBarBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: 6px 6px 0px -2px rgba(66, 68, 90, 1);
  -moz-box-shadow: 6px 6px 0px -2px rgba(66, 68, 90, 1);
  box-shadow: 6px 6px 0px -2px rgba(66, 68, 90, 1);
`;

const LogoutButton = styled(StyledButton)`
  height: 3rem;
  width: 30%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 35%;
    font-size: 0.8rem;
  }
`;

export default NavBar;
