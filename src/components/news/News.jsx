import NewsLayout from "../../layout/NewsLayout";
import NewsLeftSide from "./news-left-side/NewsLeftSide";

import "./News.scss";

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
