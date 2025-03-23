// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//   >
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         {/* <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         /> */}
//       </div>
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div id="testimonials" className={`mt-12 mb-0 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { StarsCanvas } from "./canvas";

const testimonials = [
  {
    name: "Sailesh D",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
    feedback: "The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.",
  },
  {
    name: "Harsh P.",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    feedback: "I used to dread doing my taxes every year, but pagedone has made the process so much simpler and stress-free.",
  },
  {
    name: "Sarah L.",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    feedback: "Pagedone helps our team collaborate effortlessly. Highly recommend it!",
  },
  {
    name: "Mukesh T.",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    rating: 5,
    feedback: "A must-have tool for any professional! The experience is seamless and efficient.",
  },
];

const Feedbacks=()=> {
  const [current, setCurrent] = useState(0);
  const [showTwo, setShowTwo] = useState(window.innerWidth >= 640); // Default to 2 on desktop

  // ✅ Responsive Fix: Adjust view dynamically
  useEffect(() => {
    const handleResize = () => {
      setShowTwo(window.innerWidth >= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - (showTwo ? 2 : 1) : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev >= testimonials.length - (showTwo ? 2 : 1) ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col bg-transparent items-center justify-center px-6 py-12 bg-gray-50">
      {/* Header */}< StarsCanvas />

      <h3 className="text-gray-500 text-sm uppercase">Testimonial</h3>
      <h2 className="text-3xl font-bold text-white text-center">
        100+ Customers gave their <span className="text-purple-600">Feedback</span>
      </h2>

      {/* Testimonial Wrapper */}
      <div className="relative w-full  max-w-4xl mt-8">
        <div className="flex sm:flex-row sm:space-x-6 min-h-[350px] transition-all duration-300">
          {testimonials.slice(current, current + (showTwo ? 2 : 1)).map((testimonial, index) => (
            <div
              key={index}
              className="bg-transparent p-6 rounded-xl shadow-md  border-purple-200 w-full sm:w-1/2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              {/* <p className="text-gray-500">{testimonial.role}</p> */}
              <div className="flex justify-center my-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-400 mt-3">{testimonial.feedback}</p>
            </div>
          ))}
        </div>

        {/* ✅ Fixed Navigation Buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prevTestimonial}
            className="p-3 border rounded-full border-purple-500 text-purple-600 hover:bg-purple-100 transition-all"
          >
            <FaArrowLeft size={18} />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 border rounded-full border-purple-500 text-purple-600 hover:bg-purple-100 transition-all"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default SectionWrapper (Feedbacks, "Feedbacks");