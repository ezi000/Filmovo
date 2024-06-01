import {
  StyledAuthBody,
  StyledH1,
  Fields,
  StyledInput,
  Body,
  StyledButton,
} from "./authStyles.js";
import { useFormik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext.js";

// Komponent logowania
const Login = () => {
  const { getUser, setUser } = useContext(UserContext);

  const navigate = useNavigate();

    // Użycie hooka useFormik do obsługi formularza
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    // Obsługa przesłania formularza
    onSubmit: async (values) => {
      try {
        const error = await handleLogin(values.login, values.password);
        if (error == 500 || error == 403) {
          formik.setErrors({ login: error });
          formik.values.login = "";
          formik.values.password = "";
        } else {
          formik.resetForm();
          getUser().then((user) => {
            setUser(user);
          });
          navigate("/");
        }
      } catch (error) {
        formik.setErrors({ login: error });
      }
    },
  });

  return (
    <Body>
      <StyledAuthBody onSubmit={formik.handleSubmit}>
        <StyledH1>Log In</StyledH1>
        <Fields>
          <StyledInput
            type="text"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            required
            size="10"
            placeholder={
              formik.errors.login ? "Incorrect login or password" : "Login"
            }
            style={{ borderColor: formik.errors.login ? "red" : "" }}
          />
          <StyledInput
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
            size="10"
            placeholder="Password"
            style={{ borderColor: formik.errors.login ? "red" : "" }}
          />
        </Fields>
        <StyledButton type="submit" disabled={!formik.isValid}>
          Log in
        </StyledButton>
      </StyledAuthBody>
    </Body>
  );
};
// Funkcja obsługująca logowanie użytkownika
const handleLogin = async (loginLog, passwordLog) => {
  try {
    const response = await fetch("https://localhost:3000/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginLog,
        password: passwordLog,
      }),
    });
    const userResponse = await response.json();
    const user = JSON.stringify(userResponse.user);
    localStorage.setItem("user", `${user}`);
    return response.status;
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export default Login;
