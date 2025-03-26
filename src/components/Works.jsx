// import React from "react";

// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../constants";
// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// import {
 
//   ppc,
//   wellmist,
//   mf,
//   Scarpuphm, 
//   nutri,
//   tripguide,
// } from "../assets";

// const Projects = [
//   {
//     name: "Waste to Wealth",
//     description:
//       "A creative initiative harnessing waste materials to craft unique, sustainable products, demonstrating our commitment to eco-friendly innovation and creativity.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Next js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: Scarpuphm,
//     source_code_link: "https://github.com/Aryan-one6/ScarpupIndia",
//   },
//   {
//     name: "NutriBooster",
//     description:
//       "An online platform offering protein powders crafted from 99% Ayurvedic ingredients, promoting wellness through natural and effective nutrition solutions.",
//     tags: [
//       {
//         name: "Wordpress",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Javascript",
//         color: "green-text-gradient",
//       },
//       {
//         name: "PHP",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: nutri,
//     source_code_link: "https://Nutribooster.in/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Peak Performance Consultings",
//     description:
//       "A professional consulting website designed to showcase strategic advisory services across various industries. Built with a modern, responsive layout and clear navigation to effectively highlight the firm’s expertise and solutions.",
//     tags: [
//       {
//         name: "Javascript",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Wordpress",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Elementor",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: ppc,
//     source_code_link: "https://ppconsultings.com/",
//   },
//   {
//     name: "Wellmist",
//     description:
//       "A user-centric e-commerce platform focused on health and wellness products. Features include a clean, intuitive interface, seamless checkout process, and robust product catalog—all developed to deliver a smooth online shopping experience.",
//     tags: [
//       {
//         name: "Wordpress",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: wellmist,
//     source_code_link: "https://wellmist.co/",
//   },
//   {
//     name: "Muscle Flame",
//     description:
//       "An e-commerce platform dedicated to fitness enthusiasts, offering a diverse range of supplement products. Designed for seamless navigation and user engagement, Muscle Flame provides a streamlined purchasing experience.",
//     tags: [
//       {
//         name: "React js",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "Aws",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: mf,
//     source_code_link: "https://muscleflame.in/",
//   },
// ];

// const ProjectCard = ({
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transform transition-transform duration-300 hover:scale-105'>
//       <div className='relative w-full h-[230px]'>
//         <img
//           src={image}
//           alt='project_image'
//           className='w-full h-full object-cover rounded-2xl'
//         />
//       </div>

//       <div className='mt-5'>
//         <h3 className='text-white font-bold text-lg'>{name}</h3>
//         <p className='mt-2 text-secondary text-[14px]'>{description}</p>
//       </div>

//       <div className='mt-4 flex flex-wrap gap-2'>
//         {tags.map((tag) => (
//           <p key={`${name}-${tag.name}`} className={`text-sm ${tag.color}`}>
//             #{tag.name}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };


// const Works = () => {

//   const [current, setCurrent] = useState(0);
//   const [showTwo, setShowTwo] = useState(window.innerWidth >= 640); // Default to 2 on desktop

//   // ✅ Responsive Fix: Adjust view dynamically
//   useEffect(() => {
//     const handleResize = () => {
//       setShowTwo(window.innerWidth >= 640);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const prevProjects = () => {
//     setCurrent((prev) => (prev === 0 ? projects.length - (showTwo ? 2 : 1) : prev - 1));
//   };

//   const nextProjects = () => {
//     setCurrent((prev) => (prev >= projects.length - (showTwo ? 2 : 1) ? 0 : prev + 1));
//   };
//   return (
//     <>
//       <div>
//         <p id="projects" className={`${styles.sectionSubText}`}>My work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
//       </div>

//       <div className='w-full flex'>
//         <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
//           Following projects showcase my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </p>
//       </div>

//       <div className='mt-20 flex flex-wrap gap-7'>
        
//       {projects.slice(current, current + (showTwo ? 2 : 1)).map((projects, index) => (
//           <ProjectCard key={`projects-${index}`} {...projects} />
//         ))}
//       </div>

//        <div className="flex justify-start mt-6 gap-4">
//                 <button
//                   onClick={prevProjects}
//                   className="p-3 border  border-purple-500 text-purple-600 hover:bg-purple-100 transition-all"
//                 >
//                   <FaArrowLeft size={18} />
//                 </button>
//                 <button
//                   onClick={nextProjects}
//                   className="p-3 border  border-purple-500 text-purple-600 hover:bg-purple-100 transition-all"
//                 >
//                   <FaArrowRight size={18} />
//                 </button>
//               </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "Works");


import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import your images and other assets here
import {
  ppc,
  wellmist,
  mf,
  Scarpuphm,
  nutri,
  tripguide,
} from "../assets";

// Truncate helper
const truncateDescription = (text, maxWords = 15) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

const projects = [
  {
    name: "Waste to Wealth",
    description:
    "A creative initiative harnessing waste materials to craft unique, sustainable products, demonstrating our commitment..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Scarpuphm,
    source_code_link: "https://github.com/Aryan-one6/ScarpupIndia",
  },
  {
    name: "NutriBooster",
    description:
    "An online platform offering protein powders crafted from 99% Ayurvedic ingredients, promoting wellness through natural and effective nutrition solutions.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: nutri,
    source_code_link: "https://Nutribooster.in/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Peak Performance Consultings",
    description:
      "A professional consulting website designed to showcase strategic advisory services across various industries. Built with a modern, responsive layout and clear navigation to effectively highlight the firm’s expertise and solutions.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "Elementor",
        color: "pink-text-gradient",
      },
    ],
    image: ppc,
    source_code_link: "https://ppconsultings.com/",
  },
  {
    name: "Wellmist",
    description:
      "A user-centric e-commerce platform focused on health and wellness products. Features include a clean, intuitive interface, seamless checkout process, and robust product catalog—all developed to deliver a smooth online shopping experience.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: wellmist,
    source_code_link: "https://wellmist.co/",
  },
  {
    name: "Muscle Flame",
    description:
      "An e-commerce platform dedicated to fitness enthusiasts, offering a diverse range of supplement products. Designed for seamless navigation and user engagement, Muscle Flame provides a streamlined purchasing experience.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Aws",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mf,
    source_code_link: "https://muscleflame.in/",
  },
];

// Reusable Card Component
const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  // Local state to toggle read more/less
  const [isExpanded, setIsExpanded] = useState(false);
  
  const truncated = truncateDescription(description, 15);

  // Decide which text to show based on isExpanded
  const displayText = isExpanded ? description : truncated;

  return (
    <div
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full 
                 transform transition-transform duration-300 hover:scale-105
                 flex flex-col h-full justify-between"
    >
      {/* IMAGE */}
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* DESCRIPTION AREA */}
      <div className="mt-5 flex-1 flex flex-col justify-start">
        <h3 className="text-white font-bold text-lg">{name}</h3>

        <p className="mt-2 text-secondary text-[14px] mb-2">
          {displayText}
        </p>
        {/* Only show "Read More / Less" button if text is over 15 words */}
        {/* {description.trim().split(/\s+/).length > 15 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 underline text-sm"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )} */}
      </div>

      {/* TAGS */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-sm ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};



const Works = () => {
  const [current, setCurrent] = useState(0);
  // Show 3 cards on desktop, 1 card on mobile
  const [cardsToShow, setCardsToShow] = useState(
    window.innerWidth >= 1024 ? 3 : 1
  );

  // Update on resize
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth >= 1024 ? 3 : 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigate
  const prevProjects = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - cardsToShow : prev - 1
    );
  };
  const nextProjects = () => {
    setCurrent((prev) =>
      prev >= projects.length - cardsToShow ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextProjects();
    }, 3000);
    // Clear interval on unmount or when dependencies change
    return () => clearInterval(interval);
  }, [nextProjects]);

  return (
    <>
      <div>
        <p id="projects" className={`${styles.sectionSubText}`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience...
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 items-stretch">
        {projects.slice(current, current + cardsToShow).map((project, idx) => (
          <ProjectCard key={`project-${idx}`} {...project} />
        ))}
      </div>

      <div className="flex justify-start mt-6 gap-4">
        <button
          onClick={prevProjects}
          className="p-3 border border-purple-500 text-purple-600 hover:bg-purple-100 transition-all"
        >
          <FaArrowLeft size={18} />
        </button>
        <button
          onClick={nextProjects}
          className="p-3 border border-purple-500 text-purple-600 hover:bg-purple-100 transition-all"
        >
          <FaArrowRight size={18} />
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "Works");