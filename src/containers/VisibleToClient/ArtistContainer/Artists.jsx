import React, { useEffect } from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import soundcloudIcon from "../../../assets/images/soundcloud.svg";
import spotifyIcon from "../../../assets/images/spotify.svg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import {
  ArtistsContainer,
  Card,
  Container,
  LeftSection,
  RightSection,
  SubContainerClosed,
  SubContainerOpened,
  Description,
  ShortDescription,
  EventDate,
  ArtistTitle,
  OrganizationTitle,
  B2BTitle,
  PlayButton,
  PlayIconWrapper,
  ArrowIcon,
  ArtistImage,
  SocialIconsContainer,
  SecondaryArtistContainer,
  Title,
} from "./artistsStyles";

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
  }, [setOpen]);

  const renderSocialIcons = (socialLinks) => (
    <SocialIconsContainer>
      {socialLinks.map(({ name, link }) =>
        link ? (
          <a key={name} href={link} target="_blank" rel="noopener noreferrer">
            {name === "SoundCloud" && (
              <img src={soundcloudIcon} alt="SoundCloud" />
            )}
            {name === "Instagram" && <InstagramIcon />}
            {name === "YouTube" && <YouTubeIcon />}
            {name === "Spotify" && <img src={spotifyIcon} alt="Spotify" />}
          </a>
        ) : null
      )}
    </SocialIconsContainer>
  );

  const artistColor = color === "green" ? "lime" : "violet";
  const titleColor = status === "active" ? artistColor : "white";
  const b2bColor = artistColor === "lime" ? "violet" : "lime";

  return (
    <ArtistsContainer>
      <Card image={image} filter={filter}>
        {!open && (
          <SectionTitle
            top={status === "active" ? "PRÓXIMOS" : "ÚLTIMOS"}
            title="ARTISTAS"
          />
        )}

        <Container open={open}>
          {!open ? (
            <SubContainerClosed>
              <LeftSection>
                {eventDate && <EventDate>{eventDate}</EventDate>}
                <ArtistTitle color={titleColor}>{title}</ArtistTitle>
                {organization && (
                  <OrganizationTitle color={titleColor}>
                    RESIDENTE DE {organization.toUpperCase()}
                  </OrganizationTitle>
                )}
                {b2b && <B2BTitle color={b2bColor}>B2B {b2b}</B2BTitle>}
              </LeftSection>

              <RightSection>
                <ShortDescription>{body}</ShortDescription>
                {name && (
                  <PlayButton onClick={() => setOpen(true)}>
                    <PlayArrowIcon sx={{ fontSize: "2.5rem" }} />
                    <PlayIconWrapper>
                      <span>MORE OF</span>
                      <span>{name}</span>
                    </PlayIconWrapper>
                  </PlayButton>
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
              <ArrowIcon
                onClick={() => {
                  setOpen(false);
                  setTurnOffLogo(false);
                }}
              />
              <ArtistImage src={secondaryImage} alt="Artist" />

              <Title>{title}</Title>
              <Description>{description}</Description>

              {secondaryArtistName.length ? (
                <SecondaryArtistContainer>
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
                </SecondaryArtistContainer>
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
