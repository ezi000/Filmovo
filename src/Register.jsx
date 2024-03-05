import "./auth.css";

function register() {
  const loginSign = document.getElementById("name").value;
  const passwordSign = document.getElementById("password").value;
  fetch("http://localhost:3000/users/signin", {
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
}

const Register = () => {
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
      <button onClick={register} id="register">
        Register
      </button>
    </div>
  );
};

export default Register;
