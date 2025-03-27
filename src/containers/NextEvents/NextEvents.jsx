import {
  NextEventsContainer,
  Card,
  Title,
  Container,
  Body,
} from "./nextEventsStyles";
import styled from "styled-components";

const redirectToInstagram = () => {
  window.open("https://www.instagram.com/barullo.rave/", "_blank");
};

const NextEvents = ({ img }) => {
  return (
    <NextEventsContainer>
      <Card image={img}>
        <Container>
          <Body>28/03 La Pulpería | Dardo Rocha 396 - Monte Grande</Body>
          <Body>Entrada en puerta $5000</Body>
          <Title style={{ cursor: "pointer" }} onClick={redirectToInstagram}>
            FREE POR LISTA HASTA LAS 02:00 CLICK ACÁ
          </Title>
        </Container>
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
