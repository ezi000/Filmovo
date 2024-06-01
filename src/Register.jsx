import {
  StyledAuthBody,
  StyledH1,
  Fields,
  StyledInput,
  Body,
  StyledButton,
} from "./authStyles.js";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Komponent rejestracji użytkownika
const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    // Obsługa wysłania formularza
    onSubmit: async (values) => {
      try {
        const error = await handleRegistration(values.login, values.password);
        if (error == 500) {
          formik.setErrors({ login: error });
          formik.values.login = "";
          formik.values.password = "";
        } else {
          // Powrót do strony głównej po poprawnej rejestracji
          formik.resetForm();
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
        <StyledH1>Sign Up</StyledH1>
        <Fields>
          <StyledInput
            type="text"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            required
            size="10"
            placeholder={
              formik.errors.login
                ? "User with that login already exists"
                : "Login"
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
          Register
        </StyledButton>
      </StyledAuthBody>
    </Body>
  );
};

// Funkcja obsługująca rejestrację użytkownika
const handleRegistration = (loginSign, passwordSign) => {
  return fetch("https://localhost:3000/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loginSign,
      password: passwordSign,
    }),
  }).then((_data) => {
    return _data.status;
  });
};

export default Register;
