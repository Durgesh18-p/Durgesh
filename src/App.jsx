import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Navigation />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
