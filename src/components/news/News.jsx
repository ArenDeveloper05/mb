import NewsLayout from "../../layout/NewsLayout";
import "./News.scss";
import NewsLeftSide from "./news-left-side/NewsLeftSide";

const News = () => {
  return (
    <div className="news">
      <NewsLayout isHidden={false}>
        <NewsLeftSide />
      </NewsLayout>
    </div>
  );
};

export default News;
