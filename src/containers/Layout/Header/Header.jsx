import {
  UserContainer,
  HeaderContainer,
  LogoContainer,
  UserButton,
} from "./headerStyles";
import useAuth from "../../Login/useAuth";
import { useNavigate } from "react-router-dom";

export default function Header() {
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
          <UserButton onClick={() => handleRedirect("/profile")}>
            Profile
          </UserButton>
        ) : (
          <UserButton onClick={() => handleRedirect("/login")}>
            Login
          </UserButton>
        )}
      </UserContainer>
    </HeaderContainer>
  );
}
