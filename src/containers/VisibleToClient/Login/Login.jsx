import { useState, useEffect } from "react";
import useLogin from "./useLogin";
import useNotistack from "../../../components/Notistack/useNotistack";
import { TextField } from "@mui/material";
import {
  LoginContainer,
  LoginFormContainer,
  TitleContainer,
  Title,
  LoginForm,
  ButtonsContainer,
  RightSection,
  ButtonMUi,
  CheckBoxContainer,
} from "./loginStyles";
import Checkbox from "@mui/material/Checkbox";

export default function Login() {
  const { showNotification } = useNotistack();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [viewPassword, setViewPassword] = useState(false);
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

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [errors, setErrors] = useState({});
  const handleSetErrors = (errors) => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };

  useEffect(() => {
    handleSetErrors(errors);
  }, [errors]);

  return (
    <LoginContainer>
      <LoginFormContainer>
        <RightSection>
          <LoginForm onSubmit={(e) => handleLoginUser(e)} noValidate>
            <TitleContainer>
              <Title>Sign in</Title>
            </TitleContainer>
            <TextField
              sx={{
                maxWidth: "25rem",
              }}
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
            />
            <TextField
              sx={{
                maxWidth: "25rem",
              }}
              required
              fullWidth
              label="Password"
              id="password"
              autoComplete="new-password"
              name="password"
              onChange={(e) => handleChange(e)}
              error={errors[1]?.password}
              value={data.password}
              type={viewPassword ? "text" : "password"}
              variant="outlined"
            />
            <CheckBoxContainer
              style={{
                maxWidth: "25rem",
              }}
            >
              <Checkbox
                {...label}
                onChange={() => setViewPassword(!viewPassword)}
              />
              <>Show password</>
            </CheckBoxContainer>

            <ButtonsContainer
              style={{
                maxWidth: "25rem",
              }}
            >
              <ButtonMUi
                variant="contained"
                type="submit"
                disabled={isLoading ? true : false}
              >
                Sign in
              </ButtonMUi>
            </ButtonsContainer>
          </LoginForm>
        </RightSection>
      </LoginFormContainer>
    </LoginContainer>
  );
}
