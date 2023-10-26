import { Link } from "react-router-dom";
import "./HomePartnersSection.scss";

import partner1 from "../../../assets/images/pravrd.png";
import partner2 from "../../../assets/images/mfc.png";
import partner3 from "../../../assets/images/minecorf.png";

const HomePartnersSection = () => {
  return (
    <section className="home-partners-section">
      <Link>
        <div className="home-partners-section-item">
          <img src={partner1} alt="img" />
          <p>Правительство РД</p>
        </div>
      </Link>
      <Link>
        <div className="home-partners-section-item">
          <img src={partner2} alt="img" />
          <p>Мои документы РД</p>
        </div>
      </Link>
      <Link>
        <div className="home-partners-section-item">
          <img src={partner3} alt="img" />
          <p>Минэкономразвития РФ</p>
        </div>
      </Link>
      <Link>
        <div className="home-partners-section-item">
          <img src={partner1} alt="img" />
          <p>Агентство по предпринимательству и Инвестициям РД</p>
        </div>
      </Link>
    </section>
  );
};

export default HomePartnersSection;
