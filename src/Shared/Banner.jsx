import { useRef, } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '..//assets/images/banner/1.jpg';
import img2 from '..//assets/images/banner/2.jpg';
import img3 from '..//assets/images/banner/3.jpg';
import img4 from '..//assets/images/banner/4.jpg';
import img5 from '..//assets/images/banner/5.jpg';
import img6 from '..//assets/images/banner/6.jpg';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper h-[300px] md:h-[600px] rounded-xl"
        >
          <SwiperSlide>
            <div className="h-full">
              <img className="h-full w-full" src={img1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full">
              <img className="h-full w-full" src={img2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full">
              <img className="h-full w-full" src={img3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <img className="h-full w-full" src={img4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <img className="h-full w-full" src={img5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <img className="h-full w-full" src={img6} alt="" />
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    );
};

export default Banner;
