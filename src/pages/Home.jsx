import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Work from "./Work";
import ContactMe from "../components/ContactMe";
import Audio from "../components/Audio";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <About />
      <Work />
      <ContactMe />
      <Audio />
    </>
  );
};

export default Home;
