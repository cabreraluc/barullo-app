import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  ArtistsContainer,
  Card,
  Container,
  LeftSection,
  Title,
  Body,
  RightSection,
  Icons,
} from "./artistsStyles";

const Artists = ({ image, color, titles, body, name }) => {
  let filter = color === "violet" ? "270" : "90";

  return (
    <ArtistsContainer>
      <Card image={image} filter={filter}>
        <Container>
          <LeftSection>
            {titles.map((e) => {
              return <Title>{e}</Title>;
            })}
          </LeftSection>
          <RightSection>
            {body}
            {name?.length ? (
              <button
                style={{
                  marginTop: "1.3rem",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                  fontWeight: "400",
                  fontSize: "1rem",
                  fontFamily: "Oswald, sans-serif",
                }}
              >
                {`MORE OF ${name}`}
              </button>
            ) : null}
            {/* {instagram?.length ? (
              <Icons>
                <a
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon
                    fontSize="medium"
                    sx={{ marginRight: "0.4rem" }}
                  />{" "}
                  {instagram}
                </a>
              </Icons>
            ) : null} */}
          </RightSection>
        </Container>
      </Card>
    </ArtistsContainer>
  );
};

export default Artists;
