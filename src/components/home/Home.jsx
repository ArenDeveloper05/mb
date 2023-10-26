import "./Home.scss";
import MyBusiness from "./my-business/MyBusiness";
import SearchSite from "./search-site/SearchSite";
import Services from "./services/Services";
import SuccessStory from "./success-story/SuccessStory";
import Faq from "./faq/Faq";
import Modes from "./modes/Modes";
import DigitalPlatform from "./digital-platform/DigitalPlatform";
import HomeDigitalSection from "./home-digital-section/HomeDigitalSection";
import HomeEventsSection from "./home-events-section/HomeEventsSection";
import HomeNewsSection from "./home-news-section/HomeNewsSection";
import HomePartnersSection from "./home-partners-section/HomePartnersSection";
import HomeQuestionSection from "./home-question-section/HomeQuestionSection";
import HomeServicesSection from "./home-services-section/HomeServicesSection";
const Home = () => {
  return (
    <div className="home">
      <Modes />
      <MyBusiness />
      <Services />
      <DigitalPlatform />
      <SuccessStory />
      <SearchSite />
      <HomeServicesSection />
      <HomeNewsSection />
      <HomeQuestionSection />
      <HomeEventsSection />
      <HomeDigitalSection />
      <Faq />
      <HomePartnersSection />
    </div>
  );
};

export default Home;
