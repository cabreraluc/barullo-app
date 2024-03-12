import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import { ArtistsContainer, Card } from "./artistsStyles";
import artistImage1 from "../../artist1.webp";

const Artists = () => {
  return (
    <ArtistsContainer>
      <Card image={artistImage1}></Card>
    </ArtistsContainer>
  );
};

export default Artists;
