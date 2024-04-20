import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import YouTubeIcon from "@mui/icons-material/YouTube";
import soundcloudIcon from "../../soundcloud.svg";
import spotifyIcon from "../../spotify.svg";

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

const Artists = ({
  image,
  color,
  titles,
  body,
  name,
  description,
  secondaryImage,
  setTurnOffLogo,
  open,
  setOpen,
  soundCloud,
  instagram,
  spotify,
  youtube,
  soundCloudSecondary,
  instagramSecondary,
  spotifySecondary,
  youtubeSecondary,
  secondaryArtistName,
  artistName,
}) => {
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
                    onClick={() => {
                      setOpen(true);
                      setTurnOffLogo(true);
                    }}
                  >
                    {`More of ${name}`}
                  </button>
                ) : null}
              </RightSection>
            </SubContainerClosed>
          ) : (
            <SubContainerOpened>
              <ArrowDropDownIcon
                style={{
                  color: "white",
                  fontSize: "3rem",
                  cursor: "pointer",
                  zIndex: "100000",
                }}
                onClick={() => {
                  setOpen(false);
                  setTurnOffLogo(false);
                }}
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
              {secondaryArtistName.length ? (
                <div style={{ margin: "2rem" }}>
                  <Title style={{ fontSize: "1.5rem" }}>{artistName}</Title>

                  <IconsContainer>
                    {soundCloud.length && (
                      <a
                        href={soundCloud}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ width: "2rem", height: "2rem" }}
                          src={soundcloudIcon}
                        />
                      </a>
                    )}
                    {instagram.length && (
                      <a
                        href={instagram}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon
                          style={{ width: "2rem", height: "2rem" }}
                        ></InstagramIcon>
                      </a>
                    )}
                    {youtube.length && (
                      <a
                        href={youtube}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <YouTubeIcon
                          style={{ width: "2rem", height: "2rem" }}
                        ></YouTubeIcon>
                      </a>
                    )}
                    {spotify.length && (
                      <a
                        href={spotify}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ width: "2rem", height: "2rem" }}
                          src={spotifyIcon}
                          alt=""
                        />
                      </a>
                    )}
                  </IconsContainer>

                  <Title style={{ fontSize: "1.5rem" }}>
                    {secondaryArtistName}
                  </Title>

                  <IconsContainer>
                    {soundCloudSecondary.length && (
                      <a
                        href={soundCloudSecondary}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ width: "2rem", height: "2rem" }}
                          src={soundcloudIcon}
                        />
                      </a>
                    )}
                    {instagramSecondary.length && (
                      <a
                        href={instagramSecondary}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon
                          style={{ width: "2rem", height: "2rem" }}
                        ></InstagramIcon>
                      </a>
                    )}
                    {youtubeSecondary.length && (
                      <a
                        href={youtubeSecondary}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <YouTubeIcon
                          style={{ width: "2rem", height: "2rem" }}
                        ></YouTubeIcon>
                      </a>
                    )}
                    {spotifySecondary.length && (
                      <a
                        href={spotifySecondary}
                        style={{ color: "white" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ width: "2rem", height: "2rem" }}
                          src={spotifyIcon}
                          alt=""
                        />
                      </a>
                    )}
                  </IconsContainer>
                </div>
              ) : (
                <IconsContainer>
                  {soundCloud.length ? (
                    <a
                      href={soundCloud}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "2rem", height: "2rem" }}
                        src={soundcloudIcon}
                      />
                    </a>
                  ) : null}
                  {instagram.length ? (
                    <a
                      href={instagram}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon
                        style={{ width: "2rem", height: "2rem" }}
                      ></InstagramIcon>
                    </a>
                  ) : null}
                  {youtube?.length ? (
                    <a
                      href={youtube}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon
                        style={{ width: "2rem", height: "2rem" }}
                      ></YouTubeIcon>
                    </a>
                  ) : null}
                  {spotify?.length ? (
                    <a
                      href={spotify}
                      style={{ color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ width: "2rem", height: "2rem" }}
                        src={spotifyIcon}
                        alt=""
                      />
                    </a>
                  ) : null}
                </IconsContainer>
              )}
            </SubContainerOpened>
          )}
        </Container>
      </Card>
    </ArtistsContainer>
  );
};

export default Artists;
