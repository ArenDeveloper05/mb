import { BsArrowRight } from "react-icons/bs";

const NewsLeftSideListItem = ({ item }) => {
  return (
    <li className="news-left-side-list-item">
      <div className="news-left-side-list-item-images">
        <img
          src={item.img}
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

        <p className="news-left-side-list-item-desc-txt">{item.desc}</p>

        <button className="news-left-side-list-item-desc-btn">
          Читать{" "}
          <BsArrowRight className="news-left-side-list-item-desc-btn-icon" />
        </button>
      </div>
    </li>
  );
};

export default NewsLeftSideListItem;
