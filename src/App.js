import SideNavbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";

import { Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home";
import Strategy from './pages/strategy/Strategy';
import Mission from './pages/mission/Mission';
import Social from './pages/social/SocialMedia';
import Contact from "./pages/contact/Contact";
import Entrepreneur from "./pages/entrepreneur/Entrepreneur";

const App = () => {
  return (
    <>
      <SideNavbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/social" element={<Social />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/entrepreneur" element={<Entrepreneur />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
