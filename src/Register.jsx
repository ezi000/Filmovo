import { useState } from "react";
import {
  StyledAuthBody,
  StyledH1,
  Fields,
  StyledInput,
  Body,
  StyledButton,
} from "./authStyles.js";

//można dodać, żeby trzeba było 2x wpisać to samo hasło - (coś typu (value={password}!==value={passwordRepeate})? ERROR : register(login, password) )
const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Body>
      <StyledAuthBody>
        <StyledH1>Sign Up</StyledH1>
        <Fields>
          <StyledInput
            type="text"
            name="login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            required
            size="10"
            placeholder="Login"
          />
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            size="10"
            placeholder="Password"
          />
        </Fields>
        <StyledButton
          onClick={() => handleRegistration(login, password)}
          id="register"
        >
          Register
        </StyledButton>
      </StyledAuthBody>
    </Body>
  );
};

const handleRegistration = (loginSign, passwordSign) => {
  fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loginSign,
      password: passwordSign,
    }),
  }).then((_data) => {
    window.location.reload();
  });
};

export default Register;
