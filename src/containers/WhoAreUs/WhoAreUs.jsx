import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import ImageWe from "../../WhoAreWe.jpg";
import { WhoAreUsContainer, Card, Title, Body, Icons } from "./whoAreUsStyles";
import InstagramIcon from "@mui/icons-material/Instagram";

const NextEvents = () => {
  return (
    <WhoAreUsContainer>
      <Card image={ImageWe}>
        <Title>Sobre nosotros</Title>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quibusdam voluptatum a id commodi laborum enim in tempore ratione
          molestias, iure quos nam recusa-ndae, optio repellendus unde? Minus,
          laborum tempora!
        </Body>
        <Icons>
          <a
            style={{ color: "white" }}
            href={"https://www.instagram.com/barullo.inc/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </Icons>
      </Card>
    </WhoAreUsContainer>
  );
};

export default NextEvents;
