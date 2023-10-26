import { Link } from "react-router-dom";
import arrow from "../../../../assets/images/arrow.png";

const HomeNewsSectionItem = ({ item }) => {
  return (
    <Link className="home-news-section-container-item">
      <img
        className="home-news-section-container-item-img"
        src={item.img}
        alt="img"
      />
      <div className="home-news-section-container-item-dateCategoryBox">
        <span>{item.date}</span>
        <span>{item.category}</span>
      </div>
      <p className="home-news-section-container-item-title">{item.title}</p>
      <div className="home-news-section-container-item-readMore">
        <p>Читать</p>
        <img className="arrow" src={arrow} alt="arrow" />
      </div>
    </Link>
  );
};

export default HomeNewsSectionItem;
