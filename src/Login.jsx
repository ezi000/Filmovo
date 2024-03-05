import "./auth.css";

function login() {
  const loginLog = document.getElementById("name").value;
  const passwordLog = document.getElementById("password").value;
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
}

const Login = () => {
  return (
    <div className="auth">
      <label htmlFor="name">Login</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        minLength="4"
        size="10"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minLength="4"
        size="10"
      />
      <button onClick={login} id="login">
        Log in
      </button>
    </div>
  );
};

export default Login;
