import NextEventsImg from "../../assets/images/nextevents.jpg";
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

const NextEvents = () => {
  const navigate = useNavigate();
  return (
    <NextEventsContainer>
      <Card image={NextEventsImg}>
        <Container>
          <LeftSection>
            <Title>BARULLO</Title>

            <Body>24/5 00:00hs</Body>
            <Body>Lomas de Zamora</Body>
          </LeftSection>
          <RightSection>
            <BuyTicketButton
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/event-information")}
            >
              <ButtonText>Compra tu Ticket</ButtonText>
            </BuyTicketButton>
          </RightSection>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
