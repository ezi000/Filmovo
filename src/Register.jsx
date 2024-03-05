import "./auth.css";

function register() {
  const loginSign = document.getElementById("name").value;
  const passwordSign = document.getElementById("password").value;
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
}

//można dodać, żeby trzeba było 2x wpisać to samo hasło
const Register = () => {
  return (
    <div className="auth">
      <div className="h1">Sign Up</div>
      <div className="fields">
        <input
          type="text"
          id="name"
          name="name"
          required
          minLength="4"
          size="10"
          placeholder="Login"
        />
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength="4"
          size="10"
          placeholder="Password"
        />
      </div>
      <button onClick={register} id="register">
        Register
      </button>
    </div>
  );
};

export default Register;
