import MyBusinessDesc from "./my-business/MyBusinessDesc";
import MyBusinessImg from "../../../assets/images/my-business.png";

const MyBusiness = () => {
  return (
    <div className="home-my-business">
      <MyBusinessDesc />

      <div className="home-my-business-imgs">
        <img
          src={MyBusinessImg}
          alt="My_business"
          className="home-my-business-imgs-img"
        />
      </div>
    </div>
  );
};

export default MyBusiness;
