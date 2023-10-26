import { Link } from "react-router-dom";
import { ROUTER } from "../../../../router/router";

const HomeServicesSectionItem = ({ item }) => {
  return (
    <div className="home-services-section-servicesContainer-item">
      <img
        className="home-services-section-servicesContainer-item-img"
        src={item.img}
        alt=""
      />
      <Link
        className="home-services-section-servicesContainer-item-link"
        to={`${ROUTER.SERVICES_PAGE_ROUTE}?id=${item.id ? item.id : 1}`}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default HomeServicesSectionItem;
