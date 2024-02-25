import {
  UserContainer,
  HeaderContainer,
  LogoContainer,
  UserButton,
  ButtonsContainer,
  LogOutButton,
} from "./headerStyles";
import useAuth from "../../Login/useAuth";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Login/useLogin";

export default function Header() {
  const { logOut } = useLogin();
  const navigate = useNavigate();
  const user = useAuth();
  const handleRedirect = (path) => {
    navigate(path);
  };
  return (
    <HeaderContainer>
      <LogoContainer
        onClick={
          user ? () => handleRedirect("/home") : () => handleRedirect("/")
        }
      >
        Lejos
      </LogoContainer>
      <UserContainer>
        {user ? (
          <ButtonsContainer>
            <UserButton onClick={() => handleRedirect("/profile")}>
              Profile
            </UserButton>
            <LogOutButton onClick={() => logOut()}>Log out</LogOutButton>
          </ButtonsContainer>
        ) : (
          <UserButton onClick={() => handleRedirect("/login")}>
            Login
          </UserButton>
        )}
      </UserContainer>
    </HeaderContainer>
  );
}
