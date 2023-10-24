import "./Modes.scss";
import coronaImg from "../../../assets/images/corona_img_bg.png";

const Modes = () => {
  return (
    <div className="modes">
      <div className="modes-mode self-employed">
        <p>Режим самозанятых</p>
      </div>
      <div className="modes-mode antikrizis">
        <p>Меры антикризисной поддержки</p>
        <img src={coronaImg} alt="corona" />
      </div>
    </div>
  );
};

export default Modes;
