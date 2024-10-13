import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import grid from "../assets/grid.png";
import { FaReact } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className=" relative bg-[#111827] flex flex-col items-center justify-center h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <motion.div className="relative z-10">
        <img
          src={logo}
          alt="logo"
          className="w-[200px] sm:w-[350px] md:w-[350px]"
        />
      </motion.div>

      {/* Scrolling Text and React Icon */}
      <motion.div
        className="absolute top-1/2 left-0 flex justify-center items-center overflow-hidden whitespace-nowrap z-20 pt-7"
        animate={{ x: ["20%", "-90%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <div className="flex items-center">
          <h1 className="text-[#cbd5e1] text-[30px] sm:text-[40px] md:text-[60px] lg:text-[120px] font-[500] mr-4">
            Frontend Developer.
          </h1>

          <h1 className="text-white text-[24px] sm:text-[40px] md:text-[60px] lg:text-[120px] font-[500] mx-4">
            |
          </h1>

          {/* Responsive React Icon */}
          <div className="mx-4">
            <FaReact className="text-blue-400 w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[130px] lg:h-[130px]" />
          </div>

          <h1 className="text-white text-[24px] sm:text-[40px] md:text-[60px] lg:text-[120px] font-[500] mx-4">
            |
          </h1>

          <h1 className="text-[#cbd5e1] text-[30px] sm:text-[40px] md:text-[60px] lg:text-[120px] font-[500] ml-4">
            React JS Developer.
          </h1>
        </div>
      </motion.div>

      {/* React Icon Following the Mouse */}
    </div>
  );
};

export default HeroSection;
