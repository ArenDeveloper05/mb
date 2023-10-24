import Container from "../common/container/Container";
import "./Home.scss";
import DigitalPlatform from "./digital-platform/DigitalPlatform";
import MyBusiness from "./my-business/MyBusiness";
import SearchSite from "./search-site/SearchSite";
import Services from "./services/Services";
import SuccessStory from "./success-story/SuccessStory";
const Home = () => {
  return (
    <div className="home">
      <Container>
        <MyBusiness />

        <Services />

        <DigitalPlatform />

        <SuccessStory />

        <SearchSite />
      </Container>
    </div>
  );
};

export default Home;
