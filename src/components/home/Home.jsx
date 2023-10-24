import Container from "../common/container/Container";
import "./Home.scss";
import MyBusiness from "./my-business/MyBusiness";
const Home = () => {
  return (
    <div className="home">
      <Container>
        <MyBusiness />
      </Container>
    </div>
  );
};

export default Home;
