import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import nextEventsImg from "../../nextevents.jpg";
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
      <Card image={nextEventsImg}>
        <Container>
          <LeftSection>
            <Title>BARULLO</Title>

            <Body>8 de abril 22hs</Body>
            <Body>Monte Grande</Body>
          </LeftSection>
          <RightSection>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ipsa mollitia debitis nihil vel voluptatibus dolore necessitatibus.
            Nihil accusantium, vel quos tenetur laudantium fugit sed odit? Rerum
            cumque ut delectus.
          </RightSection>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
