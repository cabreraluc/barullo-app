import {
  UserContainer,
  HeaderContainer,
  LogoContainer,
  UserButton,
  ButtonsContainer,
  LogOutButton,
  BurgerMenuContainer,
} from "./headerStyles";
import useAuth from "../../Login/useAuth";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Login/useLogin";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header() {
  const { pathname } = useLocation();
  const { logOut } = useLogin();
  const navigate = useNavigate();
  const user = useAuth();
  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <HeaderContainer>
      <BurgerMenuContainer>
        <MenuIcon
          sx={{ color: "white", cursor: "pointer", fontSize: "2.5rem" }}
        ></MenuIcon>
      </BurgerMenuContainer>

      {/* <LogoContainer
        onClick={
          user ? () => handleRedirect("/home") : () => handleRedirect("/")
        }
      >
        Lejo's Dashboard
      </LogoContainer> */}
      <UserContainer>
        {user ? (
          <ButtonsContainer>
            <NotificationsIcon sx={{ color: "white", cursor: "pointer" }}>
              Profile
            </NotificationsIcon>
            <PersonIcon
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => handleRedirect("/profile")}
            >
              Profile
            </PersonIcon>
            <LogoutIcon
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => logOut()}
            >
              Log out
            </LogoutIcon>
          </ButtonsContainer>
        ) : !pathname === "/login" && !user ? (
          <UserButton onClick={() => handleRedirect("/login")}>
            Login
          </UserButton>
        ) : null}
      </UserContainer>
    </HeaderContainer>
  );
}
