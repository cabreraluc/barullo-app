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
        <img src={ImageArtist} alt="" style={{ height: "35%" }} />

        <img src={ImageEvents} alt="" style={{ height: "35%" }} />
      </Card>
    </NextEventsContainer>
  );
};

export default NextEvents;
