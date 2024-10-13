import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser, FaEnvelope, FaPenFancy } from "react-icons/fa";
import grid from "../assets/grid.png";

const Contact = () => {
  const form = useRef();
  const isInView = useInView(form, { once: true });

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w45ev31",
        "template_iu2cj1o",
        form.current,
        "o8wKtuOX2e3fQJ4-6"
      )
      .then(
        () => {
          toast.success("Thanks for contacting Durgesh!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (left + width / 2); 
    const y = e.clientY - (top + height / 2); 
    const rotateXValue = (-y / height) * 15; 
    const rotateYValue = (x / width) * 15; 

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="bg-[#111827] pt-7 min-h-screen text-justify"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        className="text-4xl font-bold text-center text-white mt-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Contact Me.
      </motion.h2>

      <motion.p
        className="lg:text-center text-justify text-lg text-gray-300 mt-4 mb-10 px-4 md:px-20 lg:px-64 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Whether you have a question, want to collaborate on a project, or simply
        want to say hello—my inbox is open! I'd love to hear from you. I respond
        to emails within 24 hours. Let's connect!
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row justify-center text-white p-6 items-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, transition: { duration: 0.5 } } : {}}
        style={{
          backgroundImage: `url(${grid})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center items-start p-6 mb-10 md:mb-0"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
        >
          <motion.h1
            className="text-4xl font-bold mb-4 text-[#4f46e5]"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            Let's Talk!
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 },
            }}
          >
            Feel free to reach out and we can collaborate on exciting projects.
            I am always open to new ideas and opportunities.
          </motion.p>

          <motion.p
            className="text-xl font-extrabold mb-8 text-[#cbd5e1]"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 2 },
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.1, 
              transition: { duration: 0.3 },
            }}
          >
            I am open to work.
          </motion.p>
        </motion.div>

        <motion.form
          ref={form}
          className="md:w-1/2 w-full max-w-lg bg-gradient-to-r from-black to-gray-800 p-8 rounded-lg shadow-lg relative"
          onSubmit={sendEmail}
          onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.8 } }}
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, 
            transition: "transform 0.1s",
          }}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800 opacity-50 pointer-events-none"></div>

          <div className="relative mb-6">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <div className="relative">
              <FaUser className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="text"
                name="from_name"
                required
                className="w-full p-3 pl-10 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
              />
            </div>
          </div>

          <div className="relative mb-6">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
              <input
                type="email"
                name="email_id"
                required
                className="w-full p-3 pl-10 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
              />
            </div>
          </div>

          <div className="relative mb-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <div className="relative">
              <FaPenFancy className="absolute top-4 left-3 text-gray-400" />
              <textarea
                name="message"
                required
                rows="5"
                className="w-full p-3 pl-10 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-300"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#4f46e5] to-indigo-300 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </motion.div>
    </div>
  );
};

export default Contact;
