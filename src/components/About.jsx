

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import { StarsCanvas } from "./canvas";


const servicescard = [
  {
    title: "UIUX Design",
    icon: "https://xolio-nextjs.vercel.app/assets/img/icon/services_icon01.png",
    bg: "bg-[#fdebe5]",
  },
  {
    title: "Product Design",
    icon: "/assets/img/icon/services_icon02.png",
    bg: "bg-[#f1f0ff]",
  },
  {
    title: "Website Design",
    icon: "/assets/img/icon/services_icon03.png",
    bg: "bg-[#fef3ea]",
  },
  {
    title: "Branding Design",
    icon: "/assets/img/icon/services_icon04.png",
    bg: "bg-[#e9f6fe]",
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full xs:w-[200px] sm:w-[250px] p-[5px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[240px] sm:min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-14 h-14 object-contain sm:w-16 sm:h-16'
        />

        <h3 className='text-white text-[18px] font-bold text-center sm:text-[20px]'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Triad Flair is a creative and tech-focused platform offering streamlined web solutions and design services. Guided by innovation and user-centric strategies, it helps businesses and individuals establish a strong digital presence.
      </motion.p>


      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Dev",
                bg: "#fceeea",
                descr: "Some Creative technologists who loves turning ideas into immersive digital experiences. Welcome to our corner of the internet.",

                img: "https://xolio-nextjs.vercel.app/assets/img/icon/services_icon01.png",
                delay: 200,
              },
              {
                title: "Mobile Dev",
                bg: "#f1f0ff",
                descr: "Some Creative technologists who loves turning ideas into immersive digital experiences. Welcome to our corner of the internet.",

                img: "https://xolio-nextjs.vercel.app/assets/img/icon/services_icon02.png",
                delay: 400,
              },
              {
                title: "Digital Marketing",
                bg: "#fdf6f0",
                descr: "Some Creative technologists who loves turning ideas into immersive digital experiences. Welcome to our corner of the internet.",

                img: "https://xolio-nextjs.vercel.app/assets/img/icon/services_icon03.png",
                delay: 600,
              },
              {
                title: "AI",
                descr: "Some Creative technologists who loves turning ideas into immersive digital experiences. Welcome to our corner of the internet.",
                bg: "#f2f8fd",
                img: "https://xolio-nextjs.vercel.app/assets/img/icon/services_icon04.png",
                delay: 800,
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-gray-900 shadow-lg rounded-2xl text-center p-8 hover:shadow-xl transition-all flex flex-col items-center justify-center h-[320px] ${i % 2 !== 0 ? "mt-10" : ""
                  }`}
                data-aos="zoom-in"
                data-aos-delay={card.delay}
              >
                <div
                  className="w-16 h-16 mb-4 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: card.bg }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-10 h-10 transition-transform duration-500 hover:rotate-12"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{card.title}</h4>
                <p className="text-sm text-gray-400 text-center">
{card.descr}                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default SectionWrapper(About, "about");
