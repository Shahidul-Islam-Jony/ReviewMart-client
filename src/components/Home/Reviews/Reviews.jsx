// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import phone from "../../../assets/images/iphone.jpg";
import laptop from "../../../assets/images/hpLaptop.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="my-10">
      <div>
        <h2 className="text-3xl font-bold mb-10">
          What customers say about <br />
          ReviewMart?
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col bg-blue-300 p-4 rounded-lg">
              <div>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
              <div className="flex justify-between mt-10">
                <div className="flex w-32 h-28">
                  <img className="" src={laptop} alt="" />
                  <p>Name</p>
                </div>
                <p>Rating 5</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-blue-300 p-4 rounded-lg">
              <div>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
              <div className="flex justify-between mt-10">
                <div className="flex w-32 h-28">
                  <img className="" src={phone} alt="" />
                  <p>Name</p>
                </div>
                <p>Rating 5</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-blue-300 p-4 rounded-lg">
              <div>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
              <div className="flex justify-between mt-10">
                <div className="flex w-32 h-28">
                  <img className="" src={laptop} alt="" />
                  <p>Name</p>
                </div>
                <p>Rating 5</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col bg-blue-300 p-4 rounded-lg">
              <div>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>
              <div className="flex justify-between mt-10">
                <div className="flex w-32 h-28">
                  <img className="" src={laptop} alt="" />
                  <p>Name</p>
                </div>
                <p>Rating 5</p>
              </div>
            </div>
          </SwiperSlide>
      
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
