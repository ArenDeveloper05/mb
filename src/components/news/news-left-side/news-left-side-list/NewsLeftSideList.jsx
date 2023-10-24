import { useSelector } from "react-redux";
import NewsLeftSideListItem from "./news-left-side-list-item/NewsLeftSideListItem";

const NewsLeftSideList = () => {
  const newsList = useSelector((state) => state.news.news);

  return (
    <ul className="news-left-side-list">
      {newsList.map((item) => {
        return <NewsLeftSideListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default NewsLeftSideList;
