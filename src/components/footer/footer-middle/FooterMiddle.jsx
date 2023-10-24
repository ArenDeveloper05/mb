import AboutCenter from "./about-center/AboutCenter";
import Contact from "./contact/Contact";
import StateSupport from "./state-support/StateSupport";

const FooterMiddle = () => {
  return (
    <div className="footer-middle">
      <AboutCenter />

      <StateSupport />

      <Contact />
    </div>
  );
};

export default FooterMiddle;
