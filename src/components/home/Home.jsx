import "./Home.scss";
import HomeDigitalSection from "./home-digital-section/HomeDigitalSection";
import HomeEventsSection from "./home-events-section/HomeEventsSection";
import HomeNewsSection from "./home-news-section/HomeNewsSection";
import HomePartnersSection from "./home-partners-section/HomePartnersSection";
import HomeQuestionSection from "./home-question-section/HomeQuestionSection";
import HomeServicesSection from "./home-services-section/HomeServicesSection";
const Home = () => {
  return (
    <div>
      <HomeServicesSection />
      <HomePartnersSection />
      <HomeNewsSection />
      <HomeQuestionSection />
      <HomeEventsSection />
      <HomeDigitalSection />
    </div>
  );
};

export default Home;
