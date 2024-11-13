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

const redirectToInstagram = () => {
  window.location.href = "https://www.instagram.com/barullo.rave/";
};

const NextEvents = ({ img }) => {
  const navigate = useNavigate();
  return (
    <NextEventsContainer>
      <Card image={img}>
        <Container>
          {/* <LeftSection> */}
          <Title> Reserva tu entrada en nuestra página de instagram</Title>

          <Body onClick={redirectToInstagram}>Click acá</Body>
          {/* <Body>Lomas de Zamora</Body> */}
          {/* </LeftSection> */}
          {/* <RightSection>
            <BuyTicketButton
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/event-information")}
            >
              <ButtonText>Compra tu Ticket</ButtonText>
            </BuyTicketButton>
          </RightSection> */}
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
