import {
  NextEventsContainer,
  Card,
  Body,
  Title,
  Container,
  LeftSection,
  RightSection,
  BuyTicketButton,
  ButtonText,
} from "./nextEventsStyles";
import { useNavigate } from "react-router-dom";
import SpaceshipLoader from "../../components/Loader/SpaceshipLoader";
import Vox from "../../assets/images/vox.png";
import BarulloLogo from "../../assets/images/logobarullo-white.png";
import { Instagram } from "@mui/icons-material";

const redirectToInstagram = () => {
  window.location.href = "https://www.instagram.com/barullo.rave/";
};
const predefinedMessage = "Hola, quiero asistir al evento!";

const NextEvents = ({ img }) => {
  const navigate = useNavigate();
  return (
    <NextEventsContainer>
      <Card image={img}>
        <Container>
          {/* <LeftSection></LeftSection> */}
          <img src={Vox} alt="" />
          <Title>Viernes 21/02 VOX</Title>
          <Title>Hipólito Yrigoyen 968 CABA</Title>
          <Title> Entrada en puerta | Free hasta las 01:00hs</Title>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Instagram
                sx={{
                  fontSize: "2rem",
                  cursor: "pointer",
                  color: "purple",
                }}
                onClick={() =>
                  (window.location.href = "https://www.instagram.com/vox.b.a/")
                }
              />
              <Title
                style={{
                  color: "purple",
                }}
              >
                VOX
              </Title>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Instagram
                sx={{
                  color: "green",
                  fontSize: "2rem",
                  cursor: "pointer",
                }}
                onClick={() =>
                  (window.location.href = "https://www.instagram.com/vox.b.a/")
                }
              />
              <Title
                style={{
                  color: "green",
                }}
              >
                BARULLO
              </Title>
            </div>
          </div>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
