import { BiSolidChevronDown } from "react-icons/bi";

const StateSupportDesc = ({ setShowLinks }) => {
  const handleShowLinks = () => {
    setShowLinks((prev) => (prev = !prev));
  };

  return (
    <div className="footer-middle-state-support-desc">
      <p className="footer-middle-state-support-desc-title">
        Меры господдержки
      </p>

      <BiSolidChevronDown
        className="footer-middle-state-support-desc-icon"
        onClick={handleShowLinks}
      />
    </div>
  );
};

export default StateSupportDesc;
