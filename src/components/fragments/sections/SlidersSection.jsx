import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import config from "../../../services/config.json";

import "swiper/css/pagination";

export default function SlidersSection({ sliders }) {
  return (
    <section className="-z-10 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id} className="px-10 flex justify-center">
            {/* <Image src={config.karafarinBase + slider.image_url} width={1456} height={600}/> */}
            <img
              src={config.karafarinBase + slider.image_url}
              alt={`کارافرین-${slider.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
