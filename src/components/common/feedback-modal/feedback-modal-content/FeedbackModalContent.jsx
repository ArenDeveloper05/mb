import FeedbackModalContentForm from "./feedback-modal-content-form/FeedbackModalContentForm";
import FeedbackModalContentHeader from "./feedback-modal-content-header/FeedbackModalContentHeader";

const FeedbackModalContent = ({ setOpenModal }) => {
  return (
    <div className="footer-top-feedback-modal-content">
      <FeedbackModalContentHeader setOpenModal={setOpenModal} />
      <FeedbackModalContentForm />
    </div>
  );
};

export default FeedbackModalContent;
