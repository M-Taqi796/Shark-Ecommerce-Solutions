// 1. Import the Autoplay module
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // <-- ADD Autoplay
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialBox from "./core/Testimonial-box.component";

import testimonials from "./data/testimonials";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth >= 850);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[1690px] mx-auto">
      <h1 className="text-lg text-center font-poppins mb-20">
        Client Testimonials
      </h1>
      <section className="w-full px-4 mb-20">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]} // <-- ADD Autoplay
          slidesPerView={1}
          navigation={showNavigation}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={100}
          style={{ width: "100%" }}
          
          // 3. Add the autoplay prop
          autoplay={{
            delay: 5000, // Time in ms between slides
            disableOnInteraction: false, // Autoplay won't stop after user interaction
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="mb-14 md:mb-20">
              <TestimonialBox
                pic={testimonial.pic}
                name={testimonial.name}
                stars={testimonial.stars}
                testimonial={testimonial.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};
export default Testimonials;