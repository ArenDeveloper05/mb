import PageBanner from "../common/page-banner/PageBanner";
import AboutSection1 from "./about-section1/AboutSection1";
import AboutSection2 from "./about-section2/AboutSection2";
import AboutSection3 from "./about-section3/AboutSection3";
import AboutSection4 from "./about-section4/AboutSection4";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <PageBanner
        params={{
          list: [{ id: 1, title: "О центре" }],
          title: "О центре",
        }}
      />
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
    </div>
  );
};

export default About;
