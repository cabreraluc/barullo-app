import {
  MainContainer,
  Card,
  LogoContainer,
  LogoImg,
  RefBMCS,
} from "./mainStyles.js";
import bmncsLogo from "../../assets/images/bmncsLogo.jpeg";
import logoWhite from "../../assets/images/logobarullo-white.png";
import psbLogo from "../../assets/images/logoVerdePurple.png";

const redirect = () => {
  window.open("https://www.linkedin.com/company/brilliantmaniacs/", "_blank");
};

const Main = ({ img }) => {
  return (
    <MainContainer>
      <Card image={img}>
        <div
          style={{
            height: "25%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "75%",
          }}
        >
          <LogoContainer>
            <LogoImg src={logoWhite}></LogoImg>

            <div
              style={{
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                width: "100%",
              }}
              onClick={redirect}
            >
              <RefBMCS>POWERED BY BRILLIANT MANIACS</RefBMCS>
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
          </LogoContainer>
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "5rem",
            }}
          >
            <span
              style={{
                color: "white",
                width: "50%",
                textAlign: "center",
                fontWeight: "200",
                fontSize: "12px",
              }}
            >
              {"Bienvenido a nuestro mundo, descubre nuestra esencia sin narrativas, solo el momento presente.".toLocaleUpperCase()}
            </span>
            <img src={psbLogo} alt="" style={{ width: "4rem" }} />
          </div>
        </div>
      </Card>
    </MainContainer>
  );
};

export default Main;
