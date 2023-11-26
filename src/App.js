import SideNavbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";

import { Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home";
import Strategy from './pages/strategy/Strategy';
import Mission from './pages/mission/Mission';
import Social from './pages/social/SocialMedia';
import Contact from "./pages/contact/Contact";
import Entrepreneur from "./pages/entrepreneur/Entrepreneur";

import CookieConsent from "react-cookie-consent";
import TagManager from 'react-gtm-module';
import ReactPixel from 'react-facebook-pixel';

const pixelId = '1941976812845252'
const pixelOptions = {
  autoConfig: true,
  debug: false,
};

const tagManagerArgs = {
  gtmId: 'GTM-TLWMJ69'
}

const App = () => {
  return (
    <>
      <SideNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/social_media_management" element={<Social />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/site_vitrine" element={<Entrepreneur />} />
        <Route path="/strategie_marketing_digital" element={<Strategy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <CookieConsent
          location="bottom"
          buttonText="J'ai compris."
          style={{ background: '#f5f5f5', color: '#646467', fontSize: '14px' }}
          buttonStyle={{
            background: 'black',
            color: 'white',
            fontSize: '13px',
            borderRadius: '3px',
            padding: '5px 20px',
          }}
          buttonClasses="btn btn-default btn-grey"
          acceptOnScroll={true}
          acceptOnScrollPercentage={20}
          onAccept={(acceptedByScrolling) => {
            if (acceptedByScrolling || true) { // We have the user consent by scrolling or by click on accept
              ReactPixel.init(pixelId, pixelOptions);
              ReactPixel.pageView();
              TagManager.initialize(tagManagerArgs)
            }
          }}
        >
          Ce site utilise des cookies.
          Pour plus d’informations veuillez consulter les mentions légales et notre politique de confidentialité.{' '}
        </CookieConsent>
    </>
  );
}

export default App;
