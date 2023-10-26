import FooterTopFeedback from "./footer-top-feedback/FooterTopFeedback";
import FooterTopNetwork from "./footer-top-network/FooterTopNetwork";

const FooterTop = () => {
  return (
    <div className="footer-top">
      <FooterTopNetwork />

      <FooterTopFeedback />
    </div>
  );
};

export default FooterTop;
