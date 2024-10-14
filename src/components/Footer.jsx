import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:justify-between">
        <div className="mb-5 md:mb-0">
          <h1 className="text-3xl font-bold mb-2">Let&apos;s Connect.</h1>
          <p className="mb-2">I can make your project more engaging.</p>
          <p className="text-gray-400">Feel free to reach out anytime!</p>

          <div>
            <a
              href="mailto:suryadurgesh18@gmail.com"
              className="flex items-center justify-center text-gray-400 hover:text-white transition duration-300"
            >
              <FaEnvelope className="mr-2 text-xl" />
              Send Email.
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mb-5 md:mb-0">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-gray-400 transition duration-300"
              >
                Home.
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="hover:text-gray-400 transition duration-300"
              >
                Work.
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-400 transition duration-300"
              >
                Contact.
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://github.com/Durgesh18-p"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center"
              >
                <FaGithub className="text-2xl transition-transform duration-300 transform group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/durgesh-suryawanshi-056a58230/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center"
              >
                <FaLinkedin className="text-2xl transition-transform duration-300 transform group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+919405807468"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center"
              >
                <FaWhatsapp className="text-2xl transition-transform duration-300 transform group-hover:scale-110" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Suryadurgesh_18"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center"
              >
                <BsTwitterX className="text-2xl transition-transform duration-300 transform group-hover:scale-110" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="text-sm opacity-70">© 2024—Durgesh Suryawanshi.</p>
      </div>
    </footer>
  );
};

export default Footer;
