import { Link } from "react-router-dom";

const HomeServicesSectionItem = ({ item }) => {
  return (
    <div className="home-services-section-servicesContainer-item">
      <img
        className="home-services-section-servicesContainer-item-img"
        src={item.img}
        alt=""
      />
      <Link className="home-services-section-servicesContainer-item-link" to="">
        {item.title}
      </Link>
    </div>
  );
};

export default HomeServicesSectionItem;
