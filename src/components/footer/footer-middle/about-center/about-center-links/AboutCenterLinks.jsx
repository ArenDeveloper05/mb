import { footerConfig } from "../../../../../config";
import AboutCenterLinksLink from "./about-center-links-link/AboutCenterLinksLink";

const AboutCenterLinks = () => {
  return (
    <ul className="footer-middle-about-center-links">
      {footerConfig.aboutCenterConfig.map((item) => {
        return <AboutCenterLinksLink key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default AboutCenterLinks;
