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

const Landing = ({ openSlider, handleColorHeader }) => {
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
          <SwiperSlide>
            <Artists
              titles={["GLOSTER", "NEL", "ALIBVRGOS"]}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa mollitia debitis nihil vel voluptatibus dolore necessitatibus. Nihil accusantium, vel quos tenetur laudantium fugit sed odit? Rerum cumque ut delectus"
              }
              image={artistImage1}
              color={"green"}
            ></Artists>
            ;
          </SwiperSlide>
          <SwiperSlide>
            <Artists
              titles={["GLOSTER"]}
              body={"Productor musical y baterista, oriundo de Monte Grande, especializado en el Hip Hop e incursionadose en la electrónica. Miembro activo de la PSB, Co-creador y DJ de BARULLO"}
              image={artistImage2}
              name={"GLOSTER"}
              color={"violet"}
            ></Artists>
            ;
          </SwiperSlide>
          <SwiperSlide>
            <Artists
              titles={["ALIBVRGOS"]}
              body={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsa mollitia debitis nihil vel voluptatibus dolore necessitatibus. Nihil accusantium, vel quos tenetur laudantium fugit sed odit? Rerum cumque ut delectus"
              }
              image={artistImage3}
              name={"ALIBVRGOS"}
              color={"green"}
            ></Artists>
            ;
          </SwiperSlide>
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
