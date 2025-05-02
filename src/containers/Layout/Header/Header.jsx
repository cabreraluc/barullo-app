import { HeaderContainer, BurgerMenuContainer } from "./headerStyles";

import ShortTextIcon from "@mui/icons-material/ShortText";

import DrawerContainer from "../Drawer/DrawerContainer";

export default function Header({ setOpenSlider, colorHeader, turnOffLogo }) {
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
    </HeaderContainer>
  ) : null;
}
