import {
  UserContainer,
  HeaderContainer,
  LogoContainer,
  BurgerMenuContainer,
  LogoImg,
} from "./headerStyles";
import useAuth from "../../Login/useAuth";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Login/useLogin";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { useLocation } from "react-router-dom";

import logoBlack from "../../../assets/images/logobarullo-black.png";
import logoWhite from "../../../assets/images/logobarullo-white.png";

import DrawerContainer from "../Drawer/DrawerContainer";

export default function Header({
  setOpenSlider,
  colorHeader,
  turnOffLogo,
  setRedFilter,
}) {
  const { pathname } = useLocation();
  const { logOut } = useLogin();
  const navigate = useNavigate();
  const user = useAuth();
  const handleRedirect = (path) => {
    navigate(path);
  };

  const handleLogoClick = () => {
    setRedFilter((prev) => !prev);
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
      <LogoContainer onClick={handleLogoClick}>
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
