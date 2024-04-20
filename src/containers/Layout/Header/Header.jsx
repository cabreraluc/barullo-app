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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { useLocation } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logoRed from "../../../logobarullo-red.png";
import logoBlack from "../../../logobarullo-black.png";
import logoWhite from "../../../logobarullo-white.png";
import { useEffect, useState } from "react";
import DrawerContainer from "../Drawer/DrawerContainer";

export default function Header({ setOpenSlider, colorHeader, turnOffLogo }) {
  const { pathname } = useLocation();
  const { logOut } = useLogin();
  const navigate = useNavigate();
  const user = useAuth();
  const handleRedirect = (path) => {
    navigate(path);
  };
  return !turnOffLogo ? (
    <HeaderContainer>
      <BurgerMenuContainer>
        <DrawerContainer setOpenSlider={setOpenSlider}>
          <ShortTextIcon
            sx={
              colorHeader === "black"
                ? {
                    color: "black",
                    cursor: "pointer",
                    fontSize: "clamp(37px, 5vw, 52px)",
                    transition: "0.2s",
                  }
                : {
                    color: "white",
                    cursor: "pointer",
                    fontSize: "clamp(37px, 5vw, 52px)",
                  }
            }
          ></ShortTextIcon>
        </DrawerContainer>
      </BurgerMenuContainer>
      <LogoContainer>
        {pathname !== "/" ? null : (
          <LogoImg
            src={colorHeader === "black" ? logoBlack : logoWhite}
          ></LogoImg>
        )}
      </LogoContainer>

      <UserContainer></UserContainer>
    </HeaderContainer>
  ) : null;
}
