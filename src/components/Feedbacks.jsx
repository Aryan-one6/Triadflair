
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Sailesh Botosh",
    role: "Product Designer",
    image: "https://xolio-nextjs.vercel.app/assets/img/images/testimonial_avatar03.png",
    feedback:
      "We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions",
  },
  {
    name: "James Botosh",
    role: "Product Designer",
    image: "https://xolio-nextjs.vercel.app/assets/img/images/testimonial_avatar01.png",
    feedback:
      "We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions",
  },
  {
    name: "Alex ",
    role: "Product Designer",
    image: "https://xolio-nextjs.vercel.app/assets/img/images/testimonial_avatar03.png",
    feedback:
      "We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions",
  },

  {
    name: "Daren Smith",
    role: "Product Designer",
    image: "https://xolio-nextjs.vercel.app/assets/img/images/testimonial_avatar01.png",
    feedback:
      "We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions",
  },
  {
    name: "Mark ",
    role: "Product Designer",
    image: "https://xolio-nextjs.vercel.app/assets/img/images/testimonial_avatar03.png",
    feedback:
      "We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions",
  },
];

const Feedbacks = () => {
  return (
    <section className="relative testimonial-area-three bg-primary py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title + Arrows Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
          <h2   className={`${styles.sectionHeadText} leading-snug pt-16`} >
            Some Words From <br  className="hidden md:block" /> Our Customers
          </h2>
          {/* <div className="testimonial-nav flex gap-4 mt-6 md:mt-0">
            <button className="swiper-button-prev w-10 h-10 bg-white text-black rounded-full shadow-md hover:bg-orange-300 transition" />
            <button className="swiper-button-next w-10 h-10 bg-white text-black rounded-full shadow-md hover:bg-orange-300 transition" />
          </div> */}
        </div>

        {/* Swiper Section */}
        <Swiper   className="overflow-visible pb-16"

          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".testimonial-swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            575: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            991: { slidesPerView: 2 },
            1199: { slidesPerView: 3 },
            1350: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="overflow-visible">
              <div className="relative bg-white text-black pt-16 pb-8 px-6 rounded-[20px] shadow-md text-center overflow-visible">
                {/* Avatar */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full  border-4 border-white shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="mt-2">
                  <h4 className="text-lg font-bold">{t.name}</h4>
                  <span className="text-sm text-gray-500">{t.role}</span>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">“{t.feedback}”</p>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="testimonial-swiper-pagination text-white mt-10 flex  justify-center gap-2" />
      </div>

      {/* Decorative Shapes */}
      <div className="testimonial-shape-wrap pointer-events-none">
        <img
          src="/assets/img/images/testimonial_shape01.png"
          alt=""
          className="absolute top-0 left-0 w-20 md:w-auto opacity-30 animate-float"
        />
        <img
          src="/assets/img/images/testimonial_shape02.png"
          alt=""
          className="absolute top-10 right-0 w-12 md:w-auto opacity-30 animate-float"
        />
        <img
          src="/assets/img/images/testimonial_shape03.png"
          alt=""
          className="absolute bottom-0 left-0 w-20 md:w-auto opacity-30 animate-float"
        />
        <img
          src="/assets/img/images/testimonial_shape04.png"
          alt=""
          className="absolute bottom-0 right-0 w-16 md:w-auto opacity-30 animate-float"
        />
      </div>
    </section>
  );
};

export default SectionWrapper (Feedbacks, "Feedbacks");
