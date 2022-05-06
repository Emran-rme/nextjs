import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TeamSection({ styles }) {
  return (
    <section className="container mx-auto px-24 my-14 ">
      <div
        className={`flex justify-between bg-blue-800 border shadow-xl overflow-hidden rounded-2xl ${styles.customersImage}`}
      >
        <div className=" p-5 w-1/4 bg-blue-100 shadow-xl rounded-l-full flex justify-center items-center ">
          <h3 className="text-center font-bold text-gray-600 text-3xl border-b-4 border-lime-800 py-4">
            مشتریان ما
          </h3>
        </div>
        <div className="w-3/4 px-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="flex justify-center">
              <div className="p-8 flex flex-col justify-center items-center">
                <div className="rounded-full flex items-center h-40 w-40 bg-lime-100 overflow-hidden">
                  <img
                    className="w-full"
                    src="https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png"
                  />
                </div>
                <p className="mt-8 text-slate-200 font-body text-xl">
                  شرکت تست
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
