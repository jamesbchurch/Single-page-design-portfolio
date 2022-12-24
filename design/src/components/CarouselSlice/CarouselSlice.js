import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function CarouselSlice() {
  return (
    <div>
      <Swiper
        modules={{ Navigation, Pagination }}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="/image-slide-1.jpg" width={540} height={360} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image-slide-2.jpg" width={540} height={360} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image-slide-3.jpg" width={540} height={360} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image-slide-4.jpg" width={540} height={360} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/image-slide-5.jpg" width={540} height={360} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
