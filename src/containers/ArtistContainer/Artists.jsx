import React, { useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import YouTubeIcon from "@mui/icons-material/YouTube";
import soundcloudIcon from "../../assets/images/soundcloud.svg";
import spotifyIcon from "../../assets/images/spotify.svg";
import MusicPlayer from "./MusicPlayer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
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
  ShortDescription,
  ButtonMoreOf,
} from "./artistsStyles";

import { motion, AnimatePresence } from "framer-motion";

const Artists = ({
  image,
  color,
  title,
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
  eventDate,
  organization,
  status,
  b2b,
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
        {!open && status === "active" && (
          <SectionTitle top={"PRÓXIMOS"} title={"ARTISTAS"} />
        )}
        {!open && status === "disabled" && (
          <SectionTitle top={"ÚLTIMOS"} title={"ARTISTAS"} />
        )}
        <Container open={open}>
          {!open ? (
            <SubContainerClosed>
              <LeftSection>
                <Title
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    marginLeft: "0.8rem",
                  }}
                >
                  {eventDate?.length ? eventDate : null}
                </Title>
                <Title
                  style={{
                    marginLeft: "0.8rem",
                    color:
                      status === "active"
                        ? color !== "green"
                          ? "violet"
                          : "lime"
                        : "white",
                  }}
                >
                  {title}
                </Title>

                <Title
                  style={{
                    fontSize: "17px",
                    color:
                      status === "active"
                        ? color !== "green"
                          ? "violet"
                          : "lime"
                        : "white",
                  }}
                >
                  {organization && "RESIDENTE DE " + organization.toUpperCase()}
                </Title>
                {b2b && (
                  <Title
                    style={{
                      color: color === "green" ? "violet" : "lime",
                      fontSize: "1.5rem",
                    }}
                  >
                    B2B {b2b}
                  </Title>
                )}
              </LeftSection>
              <RightSection>
                <ShortDescription>{body}</ShortDescription>
                {name?.length && (
                  <ButtonMoreOf
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      fontWeight: "400",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "row",
                      textDecoration: "underline",
                    }}
                    onClick={() => {
                      setOpen(true);
                      // setTurnOffLogo(true);
                    }}
                  >
                    <PlayArrowIcon
                      style={{
                        fontSize: "2.5rem",
                      }}
                    ></PlayArrowIcon>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <span>MORE OF</span>
                      <span>{` ${name}`}</span>
                    </div>
                  </ButtonMoreOf>
                )}
              </RightSection>
            </SubContainerClosed>
          ) : (
            <SubContainerOpened
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* <MusicPlayer
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              /> */}
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

              <Title>{title}</Title>
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
