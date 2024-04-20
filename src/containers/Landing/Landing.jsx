import Header from "../Layout/Header/Header";
import { useNavigate } from "react-router-dom";
import { FirstSectionContainer } from "./landingStyles";
import NextEvents from "../NextEvents/NextEvents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WhoAreUs from "../WhoAreUs/WhoAreUs";
import Artists from "../ArtistContainer/Artists";
import Merch from "../Merch/Merch";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import artistImage1 from "../../artist1.webp";
import artistImage2 from "../../artist2.jpg";
import artistImage3 from "../../artist3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import useArtists from "../ArtistsPanel/useArtists";

const Landing = ({ openSlider, handleColorHeader }) => {
  const { getArtists, allArtists } = useArtists();
  const navigate = useNavigate();
  const [swiper, setSwiper] = useState(null);
  // useEffect(() => {
  //   repeatFunction();
  // }, []);

  // const repeatFunction = () => {
  //   setTimeout(() => {
  //     setIsArtist(true);
  //   }, 5000);
  // };

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
        console.log(e, "V");
        handleColorHeader(e);
        if (e.activeIndex === 1 && swiper) {
          // Asume que el Swiper anidado está en el segundo slide (índice 1)
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
            console.log(e, "H");
          }}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          scrollbar={{ draggable: true }}
          navigation={true}
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
                    titles={[`${e.artistName}`]}
                    body={e.shortDescription}
                    image={e.primaryImage}
                    name={e.artistName}
                    color={e.color}
                  ></Artists>
                  ;
                </SwiperSlide>
              );
            })
          ) : (
            <div>Vacio</div>
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
