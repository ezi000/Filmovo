import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { StyledButton } from "./authStyles";
import handleLogout from "./handleLogout";

export const NavBar = () => {
  return (
    <>
      <NavBarBody>
        <IconButton aria-label="delete">
          <ArrowBackIcon />
        </IconButton>
        <LogoutButton onClick={() => handleLogout()}>Log out</LogoutButton>
      </NavBarBody>
    </>
  );
};

const NavBarBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
