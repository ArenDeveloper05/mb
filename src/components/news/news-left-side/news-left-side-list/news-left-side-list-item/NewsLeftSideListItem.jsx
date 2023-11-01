import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NewsLeftSideListItem = ({ item }) => {
  const navigate = useNavigate();

  console.log(item);
  return (
    <li
      className="news-left-side-list-item"
      onClick={() => {
        navigate(`/news/${item.id}`);
      }}
    >
      <div className="news-left-side-list-item-images">
        <img
          src={item.image}
          alt=""
          className="news-left-side-list-item-images-img"
        />
      </div>

      <div className="news-left-side-list-item-desc">
        <a
          href={item.link}
          target="_blank"
          className="news-left-side-list-item-desc-title"
        >
          {item.title}
        </a>

        <p className="news-left-side-list-item-desc-txt">
          {item.description && item.description.length > 200
            ? item.description.slice(0, 200) + " [...]"
            : item.description}
        </p>

        <button className="news-left-side-list-item-desc-btn">
          Читать{" "}
          <BsArrowRight className="news-left-side-list-item-desc-btn-icon" />
        </button>
      </div>
    </li>
  );
};

export default NewsLeftSideListItem;
