import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="logo">
        <h1>Filmovo.</h1>
      </div>

      <div className="buttons">
        <Link to="login">
          <button id="logIn">Log in</button>
        </Link>

        <Link to="register">
          <button id="signIn">Sign in</button>
        </Link>
      </div>
    </>
  );
}

export default App;
