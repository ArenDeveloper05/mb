import "./Home.scss";
import Faq from "./faq/Faq";
import Modes from "./modes/Modes";
import MyBusiness from "./my-business/MyBusiness";
const Home = () => {
  return (
    <div className="home">
      <Modes />
      <MyBusiness />
      <Faq />
    </div>
  );
};

export default Home;
