import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Work from "./Work";
import ContactMe from "../components/ContactMe";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <div id="about">
        <About />
      </div>
      <Work />
      <ContactMe />
    </>
  );
};

export default Home;
