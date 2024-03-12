import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import { NextEventsContainer, Card } from "./nextEventsStyles";

const NextEvents = () => {
  return (
    <NextEventsContainer>
      <Card>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10%",
            color: "white",
          }}
        >
          Next events
        </h1>
        <img
          src={ImageArtist}
          alt=""
          style={{
            height: "35%",
            filter: "sepia(1) hue-rotate(270deg) saturate(3) ",
          }}
        />

        <img
          src={ImageEvents}
          alt=""
          style={{
            height: "35%",
            filter: "sepia(1) hue-rotate(90deg) saturate(3)",
          }}
        />
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
