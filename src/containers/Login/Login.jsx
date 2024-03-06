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
  LeftSection,
  RightSection,
  ButtonMUi,
  CheckBoxContainer,
  Overlay,
} from "./loginStyles";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

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
        <LeftSection>
          <Overlay>
            <>Welcome to Lejo's</>
          </Overlay>
        </LeftSection>
        <RightSection>
          <LoginForm onSubmit={(e) => handleLoginUser(e)} noValidate>
            <TitleContainer>
              <Title>Sign in</Title>
            </TitleContainer>
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
              type={viewPassword ? "text" : "password"}
              variant="outlined"
            />
            <CheckBoxContainer>
              <Checkbox
                {...label}
                onChange={() => setViewPassword(!viewPassword)}
              />
              <>Show password</>
            </CheckBoxContainer>

            <ButtonsContainer>
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
