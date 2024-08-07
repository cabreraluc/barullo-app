import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import NextEvents from "../NextEvents/NextEvents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WhoAreUs from "../WhoAreUs/WhoAreUs";
import Artists from "../ArtistContainer/Artists";
import Merch from "../Merch/Merch";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useArtists from "../ArtistsPanel/useArtists";
import NextEventsImg from "../../assets/images/nextevents.jpg";
import usImage from "../../assets/images/usImage.jpg";
import usImage2 from "../../assets/images/usImage2.jpg";

const Landing = ({ openSlider, handleColorHeader, setTurnOffLogo }) => {
  const firstSectionImages = [usImage, usImage2];
  const { getArtists, allArtists } = useArtists();
  const [swiper, setSwiper] = useState(null);
  const [swiperVertical, setSwiperVertical] = useState(null);
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    getArtists();
  }, []);

  useEffect(() => {
    if (open) {
      swiper?.autoplay?.stop();
      swiperVertical?.autoplay?.stop();
    }
  }, [open, swiper, swiperVertical]);

  const handleHorizontalTouchStart = () => {
    swiperVertical?.autoplay?.stop();
  };

  return (
    <Swiper
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      direction={"vertical"}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={(e) => {
        setTurnOffLogo(false);
        setOpen(false);
        handleColorHeader(e);
        if (e.activeIndex === 1 && swiper) {
          swiper.params.autoplay.delay = 3000;
          swiper.autoplay.start();
        } else {
          swiper?.autoplay?.stop();
          swiper?.slideTo(0);
        }
      }}
      onSwiper={(swiper) => setSwiperVertical(swiper)}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <Swiper
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onTouchStart={handleHorizontalTouchStart}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(e) => {
            setTurnOffLogo(false);
            setOpen(false);
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          scrollbar={{ draggable: true }}
          navigation={true}
          autoplay={{
            disableOnInteraction: true,
            delay: 2500,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {firstSectionImages.map((img) => {
            return (
              <SwiperSlide>
                <NextEvents img={img} />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>
        <Swiper
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onTouchStart={handleHorizontalTouchStart}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(e) => {
            setTurnOffLogo(false);
            setOpen(false);
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          scrollbar={{ draggable: true }}
          navigation={true}
          autoplay={{
            disableOnInteraction: true,
            delay: 2500,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {allArtists.length ? (
            allArtists.map((e, index) => {
              const color =
                e.status !== "active"
                  ? "black-white"
                  : Number.isInteger((index + 1) / 2)
                  ? "violet"
                  : "green";
              return (
                <SwiperSlide key={e._id}>
                  <Artists
                    setTurnOffLogo={setTurnOffLogo}
                    titles={[
                      `${e.artistName}${
                        e.secondaryArtistName
                          ? " & " + e.secondaryArtistName
                          : ""
                      }`,
                    ]}
                    body={e.shortDescription}
                    description={e.description}
                    image={e.primaryImage}
                    soundCloud={e.soundCloud}
                    instagram={e.instagram}
                    artistName={e.artistName}
                    secondaryArtistName={e.secondaryArtistName}
                    spotify={e.spotify}
                    youtube={e.youtube}
                    soundCloudSecondary={e.soundCloudSecondary}
                    instagramSecondary={e.instagramSecondary}
                    spotifySecondary={e.spotifySecondary}
                    youtubeSecondary={e.youtubeSecondary}
                    secondaryImage={e.secondaryImage}
                    name={e.artistName}
                    color={color}
                    open={open}
                    setOpen={setOpen}
                    setIsPlaying={setIsPlaying}
                    isPlaying={isPlaying}
                    audioRef={audioRef}
                  />
                </SwiperSlide>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "2rem",
              }}
            >
              CARGANDO
            </div>
          )}
        </Swiper>
      </SwiperSlide>

      <SwiperSlide>
        <Merch />
      </SwiperSlide>
      <SwiperSlide>
        <WhoAreUs />
      </SwiperSlide>
    </Swiper>
  );
};

export default Landing;
