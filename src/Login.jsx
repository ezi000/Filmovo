import {
  StyledAuthBody,
  StyledH1,
  Fields,
  StyledInput,
  Body,
  StyledButton,
} from "./authStyles.js";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: async (values) => {
      handleLogin(values.login, values.password);
      formik.resetForm();
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
            placeholder="Login"
          />
          <StyledInput
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
            size="10"
            placeholder="Password"
          />
        </Fields>
        <StyledButton type="submit" disabled={!formik.isValid}>
          Log in
        </StyledButton>
      </StyledAuthBody>
    </Body>
  );
};

const handleLogin = async (loginLog, passwordLog) => {
  try {
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
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
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export default Login;
