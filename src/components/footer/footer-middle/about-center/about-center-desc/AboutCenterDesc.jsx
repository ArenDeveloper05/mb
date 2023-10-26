import { BiSolidChevronDown } from "react-icons/bi";

const AboutCenterDesc = ({ setShowLinks }) => {
  const handleShowLinks = () => {
    setShowLinks((prev) => (prev = !prev));
  };

  return (
    <div className="footer-middle-about-center-desc">
      <p className="footer-middle-about-center-desc-title">О центре</p>

      <BiSolidChevronDown
        className="footer-middle-about-center-desc-icon"
        onClick={handleShowLinks}
      />
    </div>
  );
};

export default AboutCenterDesc;
