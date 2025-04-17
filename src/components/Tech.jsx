import React, { useState } from "react";
import { motion } from "framer-motion";
import { StarsCanvas } from "./canvas";

import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  const [activeTech, setActiveTech] = useState(null);

  const handleTouchStart = (technologyName) => {
    setActiveTech(technologyName);
  };

  const handleTouchEnd = () => {
    setActiveTech(null);
  };

  return (
    <div id="tech"> 
    {/* <StarsCanvas/> */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>
          Our Tech Stacks 
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="w-full flex flex-row flex-wrap justify-center gap-10 mt-20 mb-20">
        {technologies.map((technology) => (
          <motion.div 
            key={technology.name} 
            className={`grid grid col-3 sm:w-28 sm:h-28 flex flex-wrap justify-center items-center rounded-full bg-transparent p-5 transition-transform duration-300 ${
              activeTech === technology.name ? "scale-110" : ""
            }`}
            whileHover={{
              rotate: 720, // Spin on hover for desktop
              scale: 1.1, 
              boxShadow: "0px 0px 20px rgba(145, 94, 255, 1)" 
            }} // Spin and increase glow on hover
            onTouchStart={() => handleTouchStart(technology.name)}
            onTouchEnd={handleTouchEnd}
            onClick={() => handleTouchStart(technology.name)} // Apply scale and spin on click for mobile
            animate={{
              rotate: activeTech === technology.name ? 720 : 0, // Spin effect
              boxShadow: activeTech === technology.name ? "0px 0px 20px rgba(145, 94, 255, 1)" : "0px 0px 10px rgba(145, 94, 255, 0.3)", // Increase glow on touch
            }}
            transition={{ 
              duration: 1.5, // Duration for spin and glow
              ease: "easeInOut", // Smooth transition
            }}
            style={{ 
              boxShadow: "0px 0px 10px rgba(145, 94, 255, 0.3)", // Initial light effect
            }}
          >
            <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "Tech");

