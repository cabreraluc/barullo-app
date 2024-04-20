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
import { useEffect, useState } from "react";
import useArtists from "../ArtistsPanel/useArtists";

const Landing = ({ openSlider, handleColorHeader, setTurnOffLogo }) => {
  const { getArtists, allArtists } = useArtists();
  const navigate = useNavigate();
  const [swiper, setSwiper] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getArtists();
  }, []);

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
        console.log(e, "V");
        handleColorHeader(e);
        if (e.activeIndex === 1 && swiper) {
          swiper.params.autoplay.delay = 3000;
          swiper.autoplay.start();
        } else {
          swiper.autoplay.stop();
          swiper.slideTo(0);
        }
      }}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <NextEvents></NextEvents>;
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
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(e) => {
            setTurnOffLogo(false);
            setOpen(false);
          }}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          scrollbar={{ draggable: true }}
          navigation={true}
          autoplay={{
            disableOnInteraction: true,
            disable: !open,
            delay: 2500,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {allArtists.length ? (
            allArtists.map((e, index) => {
              if (e.status !== "active") {
                e = { ...e, color: "black-white" };
              } else {
                if (Number.isInteger((index + 1) / 2)) {
                  e = { ...e, color: "violet" };
                } else {
                  e = { ...e, color: "green" };
                }
              }

              return (
                <SwiperSlide>
                  <Artists
                    setTurnOffLogo={setTurnOffLogo}
                    titles={[
                      `${e.artistName}${
                        e.secondaryArtistName.length
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
                    color={e.color}
                    open={open}
                    setOpen={setOpen}
                  ></Artists>
                  ;
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
        <Merch></Merch>
      </SwiperSlide>
      <SwiperSlide>
        <WhoAreUs></WhoAreUs>;
      </SwiperSlide>
    </Swiper>
  );
};

export default Landing;
