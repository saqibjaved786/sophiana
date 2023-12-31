import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import AboutUs from "./modules/AboutUs";
import ContactUs from "./modules/ContactUs";
import ComingSoon from "./modules/ComingSoon";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
