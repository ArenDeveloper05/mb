import "./Footer.scss";
import FooterBottom from "./footer-bottom/FooterBottom";
import FooterMiddle from "./footer-middle/FooterMiddle";
import FooterTop from "./footer-top/FooterTop";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterTop />

      <FooterMiddle />

      <FooterBottom />
    </footer>
  );
};

export default Footer;
