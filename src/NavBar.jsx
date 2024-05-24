import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StyledButton } from "./authStyles";
import handleLogout from "./handleLogout";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBarBody>
        <Link to="/">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <ButtonGroup>
          <Link to="/search">
            <StyledRatedButton variant="contained" startIcon={<StarHalfIcon />}>
              Add your rating
            </StyledRatedButton>
          </Link>
          <LogoutButton
            onClick={() => {
              handleLogout();
              navigate("/");
            }}
          >
            Log out
          </LogoutButton>
        </ButtonGroup>
      </NavBarBody>
    </>
  );
};

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledRatedButton = styled(Button)`
  background-color: #bc6c25 !important;
  font-family: "Mirador-BoldDEMO" !important;
  height: 3rem !important;
  width: 13rem !important;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem !important;
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
  width: 30%;
`;

export default NavBar;
