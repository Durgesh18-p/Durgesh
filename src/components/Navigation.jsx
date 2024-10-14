import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import pdf from "../assets/Durgesh_Suryawanshi.pdf";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="w-full bg-black text-white p-6 fixed top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-around items-center max-w-7xl mx-auto">
        <div>
          <Link to="/" className="text-2xl font-bold">
            Durgesh.
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/contact">Contact.</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <Link to="/work">Work.</Link>
            </li>
            <li className="hover:text-gray-400 cursor-pointer flex items-center">
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                Resume.
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX size={28} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <FiMenu size={28} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          className=" h-[300px] fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 z-50"
        >
          <ul className="text-center text-2xl space-y-4">
            <li
              className="hover:text-gray-400 cursor-pointer"
              onClick={toggleMenu}
            >
              <Link to="/contact">Contact.</Link>
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer"
              onClick={toggleMenu}
            >
              <Link to="/work">Work.</Link>
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer flex items-center"
              onClick={toggleMenu}
            >
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                Resume.
              </a>
            </li>
          </ul>
          <FiX
            size={32}
            className="absolute top-6 right-6 cursor-pointer"
            onClick={toggleMenu}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navigation;
