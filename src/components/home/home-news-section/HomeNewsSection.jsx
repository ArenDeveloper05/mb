import "./HomeNewsSection.scss";
import { newsConfig } from "../../../config";
import HomeNewsSectionItem from "./home-news-section-item/HomeNewsSectionItem";

const HomeNewsSection = () => {
  return (
    <section className="home-news-section">
      <div className="home-news-section-top">
        <h1>Последние новости</h1>
        <form action="">
          <button>все новости</button>
        </form>
      </div>
      <div className="home-news-section-container">
        {newsConfig.map((item) => {
          return <HomeNewsSectionItem item={item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default HomeNewsSection;
