import "./NewsSingle.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const NewsSingle = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const singleNewsData = useSelector((state) => state.news.news);

  useEffect(() => {
    const itemObject = singleNewsData.find((obj) => obj.id === +id);

    if (itemObject) {
      setItem(itemObject);
    }
  }, [id, singleNewsData]);

  return (
    <div className="news-single">
      <div className="news-single-images">
        <img src={item.img} alt="img" />
      </div>

      <div className="news-single-desc">
        <p className="news-single-desc-date">{item.date} Новости</p>

        <p className="news-single-desc-txt">{item.info_txt1}</p>

        <p className="news-single-desc-txt">{item.info_txt2}</p>

        <p className="news-single-desc-txt">{item.info_txt3}</p>

        {/* <a href={item.info_link1.url} className="news-single-desc-link">
          {item.info_link1.title}
        </a> */}

        <p className="news-single-desc-txt">{item.info_txt4}</p>

        <p className="news-single-desc-txt">{item.info_txt5}</p>
      </div>
    </div>
  );
};

export default NewsSingle;
