import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container, ActionIcon } from "@mantine/core";
import {
  IconCircleArrowLeftFilled,
  IconCircleArrowRightFilled,
} from "@tabler/icons-react";

function Slideshow({ slides }) {
  const swiperRef = useRef(null);
  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "50vh",
        }}
      >
        <ActionIcon
          style={{
            color: "#a31920",
          }}
          variant="light"
          size="lg"
          radius="lg"
          onClick={goToPrevSlide}
        >
          <IconCircleArrowLeftFilled size="2rem" />
        </ActionIcon>
        <Swiper
          onSwiper={handleSwiper}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          dynamicSlides={true}
          pagination={{ dynamicBullets: true }}
          slidesPerView={3}
          spaceBetween={10}
          className="mySwiper"
        >
          {slides.map((content, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              <Container size="100rem">{content}</Container>
            </SwiperSlide>
          ))}
        </Swiper>
        <ActionIcon
          data-aos="zoom-in"
          style={{
            color: "#a31920",
          }}
          variant="light"
          size="lg"
          radius="lg"
          onClick={goToNextSlide}
        >
          <IconCircleArrowRightFilled size="2rem" />
        </ActionIcon>
      </div>
    </>
  );
}

export default Slideshow;
