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
} from "./nextEventsStyles";

const NextEvents = () => {
  return (
    <NextEventsContainer>
      <Card image={NextEventsImg}>
        <Container>
          <LeftSection>
            <Title>BARULLO</Title>

            <Body>11/5 00:30hs</Body>
            <Body>Secret location</Body>
          </LeftSection>
          <RightSection>
            <Body>Más Información</Body>
          </RightSection>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
