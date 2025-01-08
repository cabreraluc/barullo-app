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
          <LeftSection>
            <Title>Sábado 18 | 01:00hs</Title>
            <Title>La pulpería - Monte Grande</Title>
          </LeftSection>
          <RightSection
            style={{ cursor: "pointer" }}
            onClick={() =>
              (window.location.href = `https://ig.me/m/barullo.rave/?text=${encodeURIComponent(
                predefinedMessage
              )}`)
            }
          >
            Envianos un DM para comprar tu entrada
            <BuyTicketButton>
              <ButtonText>click acá</ButtonText>
            </BuyTicketButton>
          </RightSection>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
