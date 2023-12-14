import "./SelfEmploymentMode.scss";
import SelfEmploymentModeSection1 from "./selfEmployment-mode-section1/SelfEmploymentModeSection1";
import SelfEmploymentModeSection2 from "./selfEmployment-mode-section2/SelfEmploymentModeSection2";
import SelfEmploymentModeSection3 from "./selfEmployment-mode-section3/SelfEmploymentModeSection3";
import SelfEmploymentModeSection4 from "./selfEmployment-mode-section4/SelfEmploymentModeSection4";
import SelfEmploymentModeSection5 from "./selfEmployment-mode-section5/SelfEmploymentModeSection5";

const SelfEmploymentMode = () => {
  return (
    <div className="self-emplyment-mode">
      <SelfEmploymentModeSection1 />
      <SelfEmploymentModeSection2 />
      <SelfEmploymentModeSection3 />
      <SelfEmploymentModeSection4 />
      <SelfEmploymentModeSection5 />
    </div>
  );
};

export default SelfEmploymentMode;
