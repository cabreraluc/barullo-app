import {
  UserContainer,
  HeaderContainer,
  LogoContainer,
  UserButton,
  ButtonsContainer,
  LogOutButton,
  BurgerMenuContainer,
  LogoImg,
} from "./headerStyles";
import useAuth from "../../Login/useAuth";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Login/useLogin";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { useLocation } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logoRed from "../../../logobarullo-red.png";
import logoBlack from "../../../logobarullo-black.png";
import { useEffect, useState } from "react";
import DrawerContainer from "../Drawer/DrawerContainer";

export default function Header({ setOpenSlider }) {
  const { pathname } = useLocation();
  const { logOut } = useLogin();
  const navigate = useNavigate();
  const user = useAuth();
  const handleRedirect = (path) => {
    navigate(path);
  };

  const [color, setColor] = useState(false);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    if (!stop) {
      setTimeout(() => {
        setColor(!color);
      }, 300);
    }
  }, [color]);

  useEffect(() => {
    setColor(!color);
  }, [stop]);

  return (
    <HeaderContainer>
      <BurgerMenuContainer>
        <DrawerContainer setOpenSlider={setOpenSlider}>
          <ShortTextIcon
            sx={{
              color: "black",
              cursor: "pointer",
              fontSize: "clamp(37px, 5vw, 52px)",
            }}
          ></ShortTextIcon>
        </DrawerContainer>
      </BurgerMenuContainer>

      <LogoContainer onClick={() => setStop(!stop)}>
        <LogoImg src={color ? logoRed : logoBlack}></LogoImg>
      </LogoContainer>
      {/* <UserContainer>
        {user ? (
          <PersonIcon
            sx={{ color: "black", cursor: "pointer" }}
            onClick={() => handleRedirect("/profile")}
          >
            Profile
          </PersonIcon>
        ) : !pathname === "/login" && !user ? (
          <UserButton onClick={() => handleRedirect("/login")}>
            Login
          </UserButton>
        ) : null}
      </UserContainer> */}
    </HeaderContainer>
  );
}
