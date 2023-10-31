import "./About.scss";
import AboutSection1 from "./about-section1/AboutSection1";
import AboutSection2 from "./about-section2/AboutSection2";
import AboutSection3 from "./about-section3/AboutSection3";
import AboutSection4 from "./about-section4/AboutSection4";

const About = () => {
  return (
    <div className="about">
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
    </div>
  );
};

export default About;
