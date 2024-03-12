import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import { ArtistsContainer, Card } from "./artistsStyles";

const Artists = () => {
  return (
    <ArtistsContainer>
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
          Artistas
        </h1>
        <img src={ImageArtist} alt="" style={{ height: "35%" }} />

        <img src={ImageEvents} alt="" style={{ height: "35%" }} />
      </Card>
    </ArtistsContainer>
  );
};

export default Artists;
