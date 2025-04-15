import React, { useState, useEffect, useRef } from "react";
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
import usImage from "../../assets/images/ne031.jpg";
import usImage2 from "../../assets/images/ne036.jpg";
import usImage3 from "../../assets/images/ne033.jpg";
import LoaderSpin from "../../components/Loader/LoaderSpin";

const Landing = ({ openSlider, handleColorHeader, setTurnOffLogo }) => {
  const firstSectionImages = [usImage2, usImage, usImage3];
  const { getArtists, allArtists } = useArtists();
  const [swiper, setSwiper] = useState(null);
  const [swiperVertical, setSwiperVertical] = useState(null);
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const swiperVerticalRef = useRef(null);
  const swiperHorizontalRef = useRef(null);

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

  const handleVerticalSlideChange = (swiper) => {
    setTurnOffLogo(false);
    setOpen(false);
    handleColorHeader(swiper);

    // Reiniciar el carrusel horizontal cuando se desliza hacia abajo
    if (
      swiper.activeIndex > swiper.previousIndex &&
      swiperHorizontalRef.current
    ) {
      swiperHorizontalRef.current.slideTo(0, 0);
    }

    if (swiper.activeIndex === 1 && swiperHorizontalRef.current) {
      swiperHorizontalRef.current.params.autoplay.delay = 3000;
      swiperHorizontalRef.current.autoplay.start();
    } else {
      swiperHorizontalRef.current?.autoplay?.stop();
      swiperHorizontalRef.current?.slideTo(0);
    }
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
      onSlideChange={handleVerticalSlideChange}
      onSwiper={(swiper) => {
        setSwiperVertical(swiper);
        swiperVerticalRef.current = swiper;
      }}
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
            // setOpen(false);
          }}
          onSwiper={(swiper) => {
            setSwiper(swiper);
            swiperHorizontalRef.current = swiper;
          }}
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
        {allArtists.length ? (
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
              // setTurnOffLogo(false);
              setOpen(false);
            }}
            onSwiper={(swiper) => {
              setSwiper(swiper);
              swiperHorizontalRef.current = swiper;
            }}
            scrollbar={{ draggable: true }}
            navigation={true}
            autoplay={{
              disableOnInteraction: true,
              delay: 2500,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {allArtists.length &&
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
                      eventDate={e.eventDate}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        ) : (
          <LoaderSpin />
        )}
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
