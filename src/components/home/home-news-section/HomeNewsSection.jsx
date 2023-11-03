import "./HomeNewsSection.scss";
import { newsConfig } from "../../../config";
import HomeNewsSectionItem from "./home-news-section-item/HomeNewsSectionItem";

const HomeNewsSection = () => {
  return (
    <section className="home-news-section">
      <div className="home-news-section-top">
        <h1 className="home-news-section-top-title">Последние новости</h1>
        <form action="">
          <button>все новости</button>
        </form>
      </div>
      <div className="home-news-section-container">
        {newsConfig.map((item) => {
          return <HomeNewsSectionItem item={item} key={item.id} />;
        })}
      </div>

      <form action="" className="home-news-section-form">
        <button className="home-news-section-form-btn">все новости</button>
      </form>
    </section>
  );
};

export default HomeNewsSection;
