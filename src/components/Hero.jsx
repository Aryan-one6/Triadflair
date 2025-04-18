import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaDownload } from "react-icons/fa"; // Import FaDownload for the download icon
import { styles } from "../styles";
import myCV from "../assets/my_cv.pdf"; // Importing your CV

const Hero = () => {
  return (
    <section className={`relative md:w-[60%]  h-screen mx-auto flex justify-center items-center `}>
      <div
        className={`absolute inset-0 top-0 bottom-0 flex justify-center items-center max-w-7xl mx-auto ${styles.paddingX} gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-60 h-60 violet-gradient' />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white `}>
          👋 Hey! Meet <span className='text-[#915EFF]'>Triad Flair!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-secondary  sm:w-full`}>
          We help bring your ideas to life. Together, 

{/* <br className='sm:block hidden' /> */}
we'll build something amazing, creative, and exactly what you need to stand out.          </p>

          {/* Social Media Icons and Download CV Icon */}
          <div className='flex flex-wrap items-center gap-4 mt-8'>
            <div className='flex gap-4'>
              <a href='https://www.linkedin.com/in/naresh-parashar-a34676213/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-white text-xl sm:text-2xl hover:text-[#0077B5] transition-colors duration-200' />
              </a>
              <a href='https://github.com/Aryan-one6/' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white text-2xl sm:text-2xl hover:text-[#333] transition-colors duration-200' />
              </a>
              <a href='https://instagram.com/Aryan_one6/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-white text-2xl sm:text-2xl hover:text-[#E4405F] transition-colors duration-200' />
              </a>
             
            </div>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
