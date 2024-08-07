import React, { useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import YouTubeIcon from "@mui/icons-material/YouTube";
import soundcloudIcon from "../../assets/images/soundcloud.svg";
import spotifyIcon from "../../assets/images/spotify.svg";
import MusicPlayer from "./MusicPlayer";

import {
  ArtistsContainer,
  Card,
  Container,
  LeftSection,
  Title,
  RightSection,
  SubContainerClosed,
  SubContainerOpened,
  Description,
  IconsContainer,
} from "./artistsStyles";

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
  audioRef,
  setIsPlaying,
  isPlaying,
}) => {
  const filter = color === "violet" ? "270" : color === "green" ? "90" : "";

  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  const renderSocialIcons = (socialLinks) => {
    return (
      <IconsContainer>
        {socialLinks.map(({ name, link }) =>
          link ? (
            <a
              key={name}
              href={link}
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name === "SoundCloud" && (
                <img
                  style={{ width: "2rem", height: "2rem" }}
                  src={soundcloudIcon}
                  alt="SoundCloud"
                />
              )}
              {name === "Instagram" && (
                <InstagramIcon style={{ width: "2rem", height: "2rem" }} />
              )}
              {name === "YouTube" && (
                <YouTubeIcon style={{ width: "2rem", height: "2rem" }} />
              )}
              {name === "Spotify" && (
                <img
                  style={{ width: "2rem", height: "2rem" }}
                  src={spotifyIcon}
                  alt="Spotify"
                />
              )}
            </a>
          ) : null
        )}
      </IconsContainer>
    );
  };

  return (
    <ArtistsContainer>
      <Card image={image} filter={filter}>
        <Container open={open}>
          {!open ? (
            <SubContainerClosed>
              <LeftSection>
                {titles.map((title, index) => (
                  <Title key={index}>{title}</Title>
                ))}
              </LeftSection>
              <RightSection>
                {body}
                {name?.length && (
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
                )}
              </RightSection>
            </SubContainerClosed>
          ) : (
            <SubContainerOpened>
              <MusicPlayer
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
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
              {titles.map((title, index) => (
                <Title key={index}>{title}</Title>
              ))}
              <Description>{description}</Description>
              {secondaryArtistName.length ? (
                <div style={{ margin: "2rem" }}>
                  <Title style={{ fontSize: "1.5rem" }}>{artistName}</Title>
                  {renderSocialIcons([
                    { name: "SoundCloud", link: soundCloud },
                    { name: "Instagram", link: instagram },
                    { name: "YouTube", link: youtube },
                    { name: "Spotify", link: spotify },
                  ])}
                  <Title style={{ fontSize: "1.5rem" }}>
                    {secondaryArtistName}
                  </Title>
                  {renderSocialIcons([
                    { name: "SoundCloud", link: soundCloudSecondary },
                    { name: "Instagram", link: instagramSecondary },
                    { name: "YouTube", link: youtubeSecondary },
                    { name: "Spotify", link: spotifySecondary },
                  ])}
                </div>
              ) : (
                renderSocialIcons([
                  { name: "SoundCloud", link: soundCloud },
                  { name: "Instagram", link: instagram },
                  { name: "YouTube", link: youtube },
                  { name: "Spotify", link: spotify },
                ])
              )}
            </SubContainerOpened>
          )}
        </Container>
      </Card>
    </ArtistsContainer>
  );
};

export default Artists;
