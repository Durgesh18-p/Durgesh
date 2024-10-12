import { motion, useInView } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si"; // Icons for skills
import { useRef, useState, useEffect } from "react"; // For referencing the component
import profile from "../assets/profile1.jpeg";
import resume from "../assets/Durgesh_Suryawanshi.pdf";
import grid from "../assets/grid.png"; // Import the grid background image

const About = () => {
  const handleResumeDownload = () => {
    window.open(resume, "_blank");
  };

  // Reference for the whole container
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2, staggerChildren: 0.08 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Custom cursor state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position whenever it moves
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-[#111827] md:p-12 overflow-hidden p-4 text-justify lg:pl-28"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50"
        style={{
          x: mousePosition.x - 25, // Centering the icon
          y: mousePosition.y - 25,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <SiReact className="text-blue-500 text-4xl opacity-70" />
      </motion.div>

      {/* Text Content: Left Side on larger screens */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation when in view
        className="relative z-10 w-full md:w-1/2 text-white flex flex-col items-center md:items-start text-center md:text-left"
      >
        {/* Heading: About Me */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <motion.span variants={letterVariants}>A</motion.span>
          <motion.span variants={letterVariants}>b</motion.span>
          <motion.span variants={letterVariants}>o</motion.span>
          <motion.span variants={letterVariants}>u</motion.span>
          <motion.span variants={letterVariants}>t</motion.span>
          <motion.span className="ml-1" variants={letterVariants}>
            M
          </motion.span>
          <motion.span variants={letterVariants}>e.</motion.span>
        </h1>

        {/* Text Description */}
        <motion.p variants={letterVariants} className="text-lg md:text-xl mb-2">
          Hi! I'm <span className="text-indigo-600">Durgesh Suryawanshi</span>.
          I am a Frontend Developer.
        </motion.p>
        <motion.p variants={letterVariants} className="text-lg md:text-xl mb-6">
          I create mesmerizing UIs with my skills.
        </motion.p>

        {/* Skills Section */}
        <h1 className="text-2xl font-semibold mb-2">
          <motion.span variants={letterVariants}>S</motion.span>
          <motion.span variants={letterVariants}>k</motion.span>
          <motion.span variants={letterVariants}>i</motion.span>
          <motion.span variants={letterVariants}>l</motion.span>
          <motion.span variants={letterVariants}>l</motion.span>
          <motion.span variants={letterVariants}>s</motion.span>
        </h1>
        <div className="flex space-x-4 mb-6 justify-center md:justify-start">
          <motion.div variants={letterVariants} className="text-3xl">
            <SiReact className="text-blue-500" />
          </motion.div>
          <motion.div variants={letterVariants} className="text-3xl">
            <SiNextdotjs className="text-black" />
          </motion.div>
          <motion.div variants={letterVariants} className="text-3xl">
            <SiTailwindcss className="text-blue-400" />
          </motion.div>
          <motion.div variants={letterVariants} className="text-3xl">
            <SiFramer className="text-pink-500" />
          </motion.div>
          <motion.div variants={letterVariants} className="text-3xl">
            <SiHtml5 className="text-orange-500" />
          </motion.div>
          <motion.div variants={letterVariants} className="text-3xl">
            <SiCss3 className="text-blue-500" />
          </motion.div>
          <motion.div variants={letterVariants} className="text-3xl">
            <SiJavascript className="text-yellow-500" />
          </motion.div>
        </div>

        {/* Education Section */}
        <h1 className="text-2xl font-semibold mb-2">
          <motion.span variants={letterVariants}>E</motion.span>
          <motion.span variants={letterVariants}>d</motion.span>
          <motion.span variants={letterVariants}>u</motion.span>
          <motion.span variants={letterVariants}>c</motion.span>
          <motion.span variants={letterVariants}>a</motion.span>
          <motion.span variants={letterVariants}>t</motion.span>
          <motion.span variants={letterVariants}>i</motion.span>
          <motion.span variants={letterVariants}>o</motion.span>
          <motion.span variants={letterVariants}>n</motion.span>
        </h1>
        <motion.p variants={letterVariants} className="text-lg mb-6">
          MGM's College of CS & IT, Nanded - 2023.
        </motion.p>

        {/* Resume Download Button */}
        <div className="flex items-center space-x-2">
          <motion.p variants={letterVariants} className="text-lg">
            Download my resume
          </motion.p>
          <button
            onClick={handleResumeDownload}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <FaDownload className="mr-2" />
            Resume
          </button>
        </div>
      </motion.div>

      {/* Image: Right Side on larger screens */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Trigger when in view
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
      >
        <img
          src={profile}
          alt="Durgesh's Photo"
          className="lg:rounded-3xl rounded-full lg:h-72 w-40 h-40 md:w-64 md:h-64 object-cover shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default About;
