import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import work from "../utils/work";
import grid from "../assets/grid.png";
import { useEffect } from "react";

const WorkComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    }, 
  };

  return (
    <div className="bg-[#111827] pt-10">
      <div className="text-center lg:mb-7 mb-5">
        <h1 className="text-4xl font-bold text-white">My Work.</h1>
      </div>
      <div
        className="px-10 relative flex flex-col items-center justify-center md:p-12 overflow-hidden"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          ref={ref} 
          className="flex flex-wrap justify-center"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          {work.map((project, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[90%] md:w-1/2 lg:w-1/3 p-4 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="shadow-md rounded-lg overflow-hidden bg-[#cbd5e1]">
              
                {project.video ? (
                  <video
                    className="w-full h-56 object-cover"
                    src={project.video}
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                )}

                <div className="p-6 text-justify">
                  <h2 className="text-2xl font-semibold mb-4 text-[#0f172a]">
                    {project.title}
                  </h2>
                  <ul className="text-gray-700 mb-6 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-gray-500">•</span>
                      <span>{project.description.one}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-gray-500">•</span>
                      <span>{project.description.two}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-gray-500">•</span>
                      <span>{project.description.three}</span>
                    </li>
                  </ul>

                  <div className="flex items-center justify-between mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#64748b] hover:text-[#0f172a] transition duration-300"
                    >
                      <FaGithub className="text-[#0f172a]" />
                      <span className="hidden sm:block lg:ml-2">GitHub</span>
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#64748b] hover:text-[#0f172a] transition duration-300"
                      >
                        <FaExternalLinkAlt className="text-[#0f172a]" />
                        <span className="hidden sm:block lg:ml-2">
                          Live Demo
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkComponent;
