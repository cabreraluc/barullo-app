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

          {/* <LeftSection> */}
          {/* <img src={Vox} alt="" /> */}

          {/* </LeftSection> */}
          <Instagram
            sx={{
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
            }}
            onClick={() =>
              (window.location.href = "https://www.instagram.com/vox.b.a/")
            }
            // style={{ cursor: "pointer" }}
            // onClick={() =>
            //   (window.location.href = `https://ig.me/m/barullo.rave/?text=${encodeURIComponent(
            //     predefinedMessage
            //   )}`)
            // }
          />
          {/* Entradas en puerta */}
          {/* <BuyTicketButton>
              <ButtonText>click acá</ButtonText>
            </BuyTicketButton> */}
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
