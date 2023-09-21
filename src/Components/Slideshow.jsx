import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container } from "@mantine/core";

function Slideshow() {
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          autoplay={{ delay: 3000 }}
          effect="fade"
          navigation={true}
          dynamicSlides={true}
          pagination={{ dynamicBullets: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Container>1</Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>2</Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>3</Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>4</Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container>5</Container>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slideshow;
