import "./Home.scss";
import MyBusiness from "./my-business/MyBusiness";
import SearchSite from "./search-site/SearchSite";
import Services from "./services/Services";
import SuccessStory from "./success-story/SuccessStory";
import Faq from "./faq/Faq";
import Modes from "./modes/Modes";
import DigitalPlatform from "./digital-platform/DigitalPlatform";
const Home = () => {
  return (
    <div className="home">
      <Modes />
      <MyBusiness />
      <Services />
      <DigitalPlatform />
    </div>
  );
};

export default Home;
