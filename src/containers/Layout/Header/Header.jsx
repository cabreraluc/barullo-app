import {
  UserContainer,
  HeaderContainer,
  LogoContainer,
  BurgerMenuContainer,
  LogoImg,
  RefBMCS,
} from "./headerStyles";
import useAuth from "../../Login/useAuth";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Login/useLogin";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { useLocation } from "react-router-dom";
import bmncsLogo from "../../../assets/images/bmncsLogo.jpeg";
import logoBlack from "../../../assets/images/logobarullo-black.png";

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

  const redirect = () => {
    window.open("https://www.linkedin.com/company/brilliantmaniacs/", "_blank");
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
      {/* <LogoContainer>
        {pathname === "/" || pathname === "/event-information" ? (
          <LogoImg src={logoWhite}></LogoImg>
        ) : pathname === "/admin-panel" ? (
          <h1 style={{ color: "white", fontSize: "2rem" }}>Administración</h1>
        ) : null}
        <div
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            width: "100%",
          }}
          onClick={redirect}
        >
          <RefBMCS>POWERED BY BRILLIANTS MANIACS</RefBMCS>
          <img
            src={bmncsLogo}
            style={{
              width: "1rem",
              height: "1rem",
              borderRadius: "1rem",
              marginTop: "1px",
            }}
          />
        </div>
      </LogoContainer> */}
    </HeaderContainer>
  ) : null;
}
