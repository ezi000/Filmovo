import { useState } from "react";
import "./auth.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth">
      <div className="h1">Log In</div>
      <input
        type="text"
        name="loginn"
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
      <button onClick={() => loginLog(login, password)} id="login">
        Log in
      </button>
    </div>
  );
};

const loginLog = (loginLog, passwordLog) => {
  fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loginLog,
      password: passwordLog,
    }),
  }).then((_data) => {
    window.location.reload();
  });
};

export default Login;
