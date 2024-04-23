import { useState } from "react";
import "./auth.css";

//można dodać, żeby trzeba było 2x wpisać to samo hasło - (coś typu (value={password}!==value={passwordRepeate})? ERROR : register(login, password) )
const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth">
      <div className="h1">Sign Up</div>
      <div className="fields">
        <input
          type="text"
          name="login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          required
          size="10"
          placeholder="Login"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          size="10"
          placeholder="Password"
        />
      </div>
      <button onClick={() => handleRegistration(login, password)} id="register">
        Register
      </button>
    </div>
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
