import "./NewsRightSide.scss";
import Events from "./events/Events";
import LatestNews from "./latest-news/LatestNews";
import NewsRightSideForm from "./news-right-side-form/NewsRightSideForm";

const NewsRightSide = () => {
  return (
    <div className="news-right-side">
      <NewsRightSideForm />

      <LatestNews />

      <Events />
    </div>
  );
};

export default NewsRightSide;
