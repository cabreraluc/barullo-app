import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  ArtistsContainer,
  Card,
  Container,
  LeftSection,
  Title,
  Body,
  RightSection,
  Icons,
  SubContainerClosed,
  SubContainerOpened,
  Description,
  IconsContainer,
} from "./artistsStyles";
import { useEffect, useState } from "react";
import soundcloudIcon from "../../soundcloud.svg";

const Artists = ({
  image,
  color,
  titles,
  body,
  name,
  description,
  secondaryImage,
}) => {
  const [open, setOpen] = useState(false);
  let filter = color === "violet" ? "270" : color === "green" ? "90" : "";
  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <ArtistsContainer>
      <Card image={image} filter={filter}>
        <Container open={open}>
          {!open ? (
            <SubContainerClosed>
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
                      marginTop: "10%",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      fontWeight: "400",
                      fontSize: "1rem",
                      fontFamily: "Oswald, sans-serif",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpen(true)}
                  >
                    {`More of ${name}`}
                  </button>
                ) : null}
              </RightSection>
            </SubContainerClosed>
          ) : (
            <SubContainerOpened>
              <ArrowDropDownIcon
                style={{ color: "white", fontSize: "3rem", cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />

              <img
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  margin: "2rem",
                  objectFit: "cover",
                }}
                src={secondaryImage}
                alt="photo"
              />
              {titles.map((e) => {
                return <Title>{e}</Title>;
              })}
              <Description>{description}</Description>
              <IconsContainer>
                <img
                  style={{ width: "2rem", height: "2rem" }}
                  src={soundcloudIcon}
                  alt=""
                />

                <InstagramIcon
                  style={{ width: "2rem", height: "2rem" }}
                ></InstagramIcon>
              </IconsContainer>
            </SubContainerOpened>
          )}
        </Container>
      </Card>
    </ArtistsContainer>
  );
};

export default Artists;
