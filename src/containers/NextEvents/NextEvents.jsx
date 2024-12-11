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
          <LeftSection></LeftSection>
          <RightSection>
            <BuyTicketButton>
              <ButtonText
                style={{ cursor: "pointer" }}
                onClick={() =>
                  (window.location.href = `https://ig.me/m/barullo.rave/?text=${encodeURIComponent(
                    predefinedMessage
                  )}`)
                }
              >
                Envianos un DM para comprar tu entrada
              </ButtonText>
            </BuyTicketButton>
          </RightSection>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
