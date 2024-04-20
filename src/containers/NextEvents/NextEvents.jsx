import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import NextEventsImg from "../../nextevents.jpg";
import {
  NextEventsContainer,
  Card,
  Body,
  Title,
  Container,
  LeftSection,
  RightSection,
  BuyTicketButton,
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

            <Body>24/5 00:30hs</Body>
            <Body>Secret location</Body>
          </LeftSection>
          <RightSection>
            <BuyTicketButton
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/event-information")}
            >
              Compra tu Ticket
            </BuyTicketButton>
          </RightSection>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
