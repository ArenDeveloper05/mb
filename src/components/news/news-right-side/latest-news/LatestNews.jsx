import LatestNewsList from "./latest-news-list/LatestNewsList";

const LatestNews = () => {
  return (
    <div className="news-right-side-latest-news">
      <p className="news-right-side-latest-news-title">Свежие записи</p>

      <LatestNewsList />
    </div>
  );
};

export default LatestNews;
