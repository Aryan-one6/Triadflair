import {
  
  mobile,
  py,
  flask,
  ppc,
  wellmist,
  mf,
  aws,
  down,
  done,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  //redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  //figma,
  //docker,
  meta,
  //starbucks,
  wordpress,
  ScarpUp,
  Scarpuphm, 
  nutri,
  logo, 
  Canva,
  bootstrap,
  tesla,
  shopify,
  //carrent,
  //jobit,
  tripguide,
  one,
  two,
  three,
  four,
  // threejs,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "App Development",
    icon: mobile,
  },
  {
    title: "Digital Marketing",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: py,
  },
  
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "AWS",
    icon: aws,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Choose Service",
    company_name: "",
    icon: down,
    iconBg: "#383E56",
    date: "",
    points: [
      "Explore our wide range of solutions—whether it's branding, web development, or custom design services. Select the option that aligns best with your needs and goals.",
      // "Expertise in using Elementor and Elementor Pro for enhanced website design and customization.",
      // "Skilled in SEO optimization with plugins like Yoast SEO and Rank Math.",
      // "Skilled in integrating payment gateways, e-commerce functionalities, and delivery partner systems.",
    ],
  },
  {
    title: "Schedule Meeting",
    company_name: "",
    icon: down,
    iconBg: "#383E56",
    date: "",
    points: [
      "Book a convenient time to discuss your project in detail. We'll clarify objectives, outline the scope, and set clear milestones to ensure we’re on the same page.",
      // "Utilizing React, Next.js, Node.js, and Express.js to build a robust and dynamic web platform.",
      // "Collaborating with artists, designers, and developers to bring unique, eco-friendly creations to life.",
      // "Ensuring a seamless user experience through responsive design and efficient functionality.",
    ],
  },
  {
    title: "Make a Payment ",
    company_name: "",
    icon: down,
    iconBg: "#383E56",
    date: "",
    points: [
      "Securely finalize your payment through our trusted gateway or a method of your choice. This allows us to commence your project without delay.",
      // "Implemented OpenAI’s DALL-E model to enable image generation from textual inputs, showcasing innovative AI integration.",
      // "Ensured user-friendly experience through intuitive design with Tailwind CSS, enhancing accessibility and usability.",
      // "Integrated Cloudinary for efficient image storage and management, optimizing the app’s performance and scalability.",
    ],
  },
  {
    title: "You're done",
    company_name: "",
    icon: done,
    iconBg: "#383E56",
    date: "",
    points: [
      "Once payment is confirmed, sit back and relax! Our team will get to work, keeping you informed with regular updates until your project is complete.",
      // "Utilized JavaScript, Node JS, and DBMS for the backend, ensuring robust functionality and data management capabilities.",
      // "Implemented Next JS for enhanced server-side rendering and improved performance, delivering a seamless browsing experience for users.",
      // "Incorporated modern web technologies to create an engaging and responsive interface, elevating the overall user experience of the online store.",
    ],
  },
];

const projects = [
  {
    name: "Waste to Wealth",
    description:
      "A creative initiative harnessing waste materials to craft unique, sustainable products, demonstrating our commitment to eco-friendly innovation and creativity.",
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

export { services, technologies, experiences,  projects };