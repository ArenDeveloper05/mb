import "./Modes.scss";
import coronaImg from "../../../assets/images/corona_img_bg.png";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../../router/router";

const Modes = () => {
  const navigate = useNavigate();

  return (
    <div className="modes">
      <div className="modes-mode self-employed">
        <p>Режим самозанятых</p>
      </div>

      <div
        className="modes-mode antikrizis"
        onClick={() => {
          navigate(ROUTER.ANTIKRIZIS_MODE_PAGE_ROUTE);
        }}
      >
        <p>Меры антикризисной поддержки</p>
        <img src={coronaImg} alt="corona" />
      </div>
    </div>
  );
};

export default Modes;
