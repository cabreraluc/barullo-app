import Header from "../Layout/Header/Header";
import { useNavigate } from "react-router-dom";
import { FirstSectionContainer } from "./landingStyles";
import NextEvents from "../NextEvents/NextEvents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WhoAreUs from "../WhoAreUs/WhoAreUs";
import Artists from "../ArtistContainer/Artists";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Landing = ({ openSlider }) => {
  const navigate = useNavigate();

  return (
    <Swiper
      style={{ height: "100%", width: "100%" }}
      direction={"vertical"}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 9000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        {" "}
        <Swiper
          style={{ height: "100%", width: "100%" }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          scrollbar={{ draggable: true }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <NextEvents></NextEvents>;
          </SwiperSlide>
          <SwiperSlide>
            <NextEvents></NextEvents>;
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>
        <NextEvents></NextEvents>;
      </SwiperSlide>
      <SwiperSlide>
        <NextEvents></NextEvents>
      </SwiperSlide>
      <SwiperSlide>
        <NextEvents></NextEvents>;
      </SwiperSlide>
    </Swiper>
  );
};

export default Landing;
