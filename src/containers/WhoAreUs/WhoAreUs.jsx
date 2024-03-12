import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import ImageWe from "../../WhoAreWe.jpg";
import { WhoAreUsContainer, Card, Title, Body } from "./whoAreUsStyles";

const NextEvents = () => {
  return (
    <WhoAreUsContainer>
      <Card
        style={{
          backgroundImage: `url(${ImageWe})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "237%",
          backgroundPosition: "center",
        }}
      >
        <Title>Sobre nosotros</Title>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quibusdam voluptatum a id commodi laborum enim in tempore ratione
          molestias, iure quos nam recusandae, optio repellendus unde? Minus,
          laborum tempora!
        </Body>
      </Card>
    </WhoAreUsContainer>
  );
};

export default NextEvents;
