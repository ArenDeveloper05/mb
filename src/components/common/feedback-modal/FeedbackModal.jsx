import "./FeedbackModal.scss";
import FeedbackModalContent from "./feedback-modal-content/FeedbackModalContent";

const FeedbackModal = ({ setOpenModal }) => {
  return (
    <div className="footer-top-feedback-modal">
      <FeedbackModalContent setOpenModal={setOpenModal} />
    </div>
  );
};

export default FeedbackModal;
