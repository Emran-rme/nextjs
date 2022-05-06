import Link from "next/link";
import { useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PostsSection({ styles, pages }) {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section>
      <div className={styles.product}>
        <span className={styles.boxIcon}>
          <span className="mdi mdi-chevron-down mdi-24px z-10 mt-12" />
        </span>
        <div className="container mx-auto px-28 ">
          <div className="flex flex-wrap flex-row-reverse justify-between">
            <ul className="flex flex-row-reverse">
              <li className=" p-3 border-b  text-slate-200">جدیدترین</li>
              <li className=" p-3  text-slate-200">محبوبترین</li>
              <li className=" p-3  text-slate-200">پربازدیدترین</li>
            </ul>
            <div>
              <span
                className="mdi mdi-chevron-left text-slate-200 mdi-36px cursor-pointer hover:text-slate-400 "
                onClick={handlePrev}
              />
              <span
                className="mdi mdi-chevron-right text-slate-200 mdi-36px cursor-pointer hover:text-slate-400 "
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-20 relative -bottom-20 -mt-20">
          <Swiper
            ref={sliderRef}
            spaceBetween={50}
            slidesPerView={3}
            className={styles.boxItem}
          >
            {pages.map((page) => (
              <SwiperSlide key={page.id}>
                <div className=" h-72 bg-white rounded-3xl shadow-md">
                  <h4>{page.page_title}</h4>
                  <p>{page.keywords}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container mx-auto px-28 mt-28">
        <div className="flex justify-start">
          <Link href="/">
            <a className="transition-all duration-300 py-3 text-slate-200 px-10 bg-blue-700 hover:bg-blue-900 cursor-pointer rounded-2xl">
              مشاهده همه
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
