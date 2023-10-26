import "./HomeDigitalSection.scss";
import { Link } from "react-router-dom";

import img from "../../../assets/images/digitalSectionImg.jpg";

const HomeDigitalSection = () => {
  return (
    <section className="home-digital-section">
      <Link>
        <img className="home-digital-section-img" src={img} alt="img" />
      </Link>
    </section>
  );
};

export default HomeDigitalSection;
