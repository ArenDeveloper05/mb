import { IoCloseSharp } from "react-icons/io5";

const FooterTopFeedbackModalContentHeader = ({ setOpenModal }) => {
  const handleCloseModal = () => {
    setOpenModal((prev) => (prev = false));
  };

  return (
    <div className="footer-top-feedback-modal-content-header">
      <p className="footer-top-feedback-modal-content-header-title">
        Обратная связь
      </p>

      <button
        className="footer-top-feedback-modal-content-header-btn"
        onClick={handleCloseModal}
      >
        <IoCloseSharp className="footer-top-feedback-modal-content-header-btn-icon" />
      </button>
    </div>
  );
};

export default FooterTopFeedbackModalContentHeader;
