import "./Footer.scss";
import FooterBottom from "./footer-bottom/FooterBottom";
import FooterMiddle from "./footer-middle/FooterMiddle";
import FooterTop from "./footer-top/FooterTop";
import Container from "../common/container/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <FooterTop />

        <FooterMiddle />

        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
