import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import { MerchContainer, Card } from "./merchStyles";

const Merch = () => {
  return (
    <MerchContainer>
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
          Merch
        </h1>
        <img src={ImageArtist} alt="" style={{ height: "35%" }} />

        <img src={ImageEvents} alt="" style={{ height: "35%" }} />
      </Card>
    </MerchContainer>
  );
};

export default Merch;
