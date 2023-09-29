import React, { useRef, useState, useEffect } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
    setIsFirstSlide(swiper.isBeginning);
    setIsLastSlide(swiper.isEnd);
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

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current) {
        setIsFirstSlide(swiperRef.current.isBeginning);
        setIsLastSlide(swiperRef.current.isEnd);
      }
    };

    if (swiperRef.current) {
      swiperRef.current.on("slideChange", handleSlideChange);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off("slideChange", handleSlideChange);
      }
    };
  }, []);

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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ActionIcon
          style={{
            color: isFirstSlide ? "#ccc" : "#a31920",
            opacity: isHovered ? 1 : 0.5,
            transition: "opacity 0.3s",
          }}
          variant="light"
          size="lg"
          radius="lg"
          onClick={goToPrevSlide}
          disabled={isFirstSlide}
        >
          <IconCircleArrowLeftFilled size="2rem" />
        </ActionIcon>
        <Swiper
          onSwiper={handleSwiper}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          dynamicSlides={true}
          pagination={{ dynamicBullets: true }}
          slidesPerView={2}
          spaceBetween={10}
          className="mySwiper"
        >
          {slides.map((content, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              <Container>{content}</Container>
            </SwiperSlide>
          ))}
        </Swiper>
        <ActionIcon
          style={{
            color: isLastSlide ? "#ccc" : "#a31920",
            opacity: isHovered ? 1 : 0.5,
            transition: "opacity 0.3s",
          }}
          variant="light"
          size="lg"
          radius="lg"
          onClick={goToNextSlide}
          disabled={isLastSlide}
        >
          <IconCircleArrowRightFilled size="2rem" />
        </ActionIcon>
      </div>
    </>
  );
}

export default Slideshow;
