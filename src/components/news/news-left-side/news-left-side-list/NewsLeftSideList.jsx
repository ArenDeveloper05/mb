import { useSelector } from "react-redux";
import NewsLeftSideListItem from "./news-left-side-list-item/NewsLeftSideListItem";
import useFetchData from "../../../../hooks/useFetchData";
import { getNews } from "../../../../api/api";
import { changeNewsData } from "../../../../redux/slices/newsSlice";
import Loading from "../../../loading/Loading";

const NewsLeftSideList = () => {
  const { error, loading } = useFetchData(getNews, 10, {
    redux: true,
    action: changeNewsData,
  });
  const newsList = useSelector((state) => state.news.news);

  return (
    <ul className="news-left-side-list">
      {loading && <Loading />}
      {newsList &&
        !loading &&
        !error &&
        newsList.map((item) => {
          return <NewsLeftSideListItem key={item.id} item={item} />;
        })}
    </ul>
  );
};

export default NewsLeftSideList;
