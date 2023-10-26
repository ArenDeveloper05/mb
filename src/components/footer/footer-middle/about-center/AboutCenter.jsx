import { useState } from "react";
import AboutCenterDesc from "./about-center-desc/AboutCenterDesc";
import AboutCenterLinks from "./about-center-links/AboutCenterLinks";

const AboutCenter = () => {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <div className="footer-middle-about-center">
      <AboutCenterDesc setShowLinks={setShowLinks} />

      {showLinks && <AboutCenterLinks />}
    </div>
  );
};

export default AboutCenter;
