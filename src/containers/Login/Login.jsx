import { useState, useEffect } from "react";
import useLogin from "./useLogin";
import useNotistack from "../../components/Notistack/useNotistack";
import { TextField } from "@mui/material";
import { ActionButton } from "../../components/Global/GlobalStyles";
import {
  LoginContainer,
  LoginFormContainer,
  TitleContainer,
  Title,
  LoginForm,
  ButtonsContainer,
} from "./loginStyles";

import Button from "@mui/material/Button";

export default function Login() {
  const { showNotification } = useNotistack();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { loginUser, isLoading } = useLogin();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      showNotification("Complete the fields.", "error");
    } else {
      loginUser(data, setErrors);
    }
  };

  const [errors, setErrors] = useState({});
  const handleSetErrors = (errors) => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };

  useEffect(() => {
    handleSetErrors(errors);
  }, [errors]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <LoginContainer>
      <LoginFormContainer>
        <TitleContainer>
          <Title>Welcome to Lejo's</Title>
        </TitleContainer>
        <LoginForm onSubmit={(e) => handleLoginUser(e)} noValidate>
          <TextField
            autoComplete="given-email"
            required
            id="email"
            label="Email"
            autoFocus
            name="email"
            fullWidth
            onChange={(e) => handleChange(e)}
            error={errors[1]?.email}
            value={data.email}
            variant="outlined"
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            required
            fullWidth
            label="Password"
            id="password"
            autoComplete="new-password"
            name="password"
            onChange={(e) => handleChange(e)}
            error={errors[1]?.password}
            value={data.password}
            type="password"
            variant="outlined"
            sx={{ marginBottom: "1rem" }}
          />

          <ButtonsContainer>
            <Button
              variant="contained"
              type="submit"
              disabled={isLoading ? true : false}
            >
              Login
            </Button>
          </ButtonsContainer>
        </LoginForm>
      </LoginFormContainer>
    </LoginContainer>
  );
}
