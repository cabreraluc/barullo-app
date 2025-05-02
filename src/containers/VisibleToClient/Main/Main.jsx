import {
  MainContainer,
  Card,
  LogoContainer,
  LogoImg,
  RefBMCS,
  ClickableLogoRow,
  BottomTextContainer,
  WelcomeText,
  CircleLogo,
  PsbLogo,
} from "./mainStyles.js";

import bmncsLogo from "../../../assets/images/bmncsLogo.jpeg";
import logoWhite from "../../../assets/images/logobarullo-white.png";
import psbLogo from "../../../assets/images/logoVerdePurple.png";

const redirect = () => {
  window.open("https://www.linkedin.com/company/brilliantmaniacs/", "_blank");
};

const Main = ({ img }) => {
  return (
    <MainContainer>
      <Card image={img}>
        <div style={{ height: "25%" }} />{" "}
        {/* Este bloque puede quedarse como está o hacerse styled si querés */}
        <div
          style={{
            height: "75%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LogoContainer>
            <LogoImg src={logoWhite} />
            <ClickableLogoRow onClick={redirect}>
              <RefBMCS>POWERED BY BRILLIANT MANIACS</RefBMCS>
              <CircleLogo src={bmncsLogo} />
            </ClickableLogoRow>
          </LogoContainer>

          <BottomTextContainer>
            <WelcomeText>
              {
                "BIENVENIDO A NUESTRO MUNDO, DESCUBRE NUESTRA ESENCIA SIN NARRATIVAS, SOLO EL MOMENTO PRESENTE."
              }
            </WelcomeText>
            <PsbLogo src={psbLogo} alt="PSB Logo" />
          </BottomTextContainer>
        </div>
      </Card>
    </MainContainer>
  );
};

export default Main;
