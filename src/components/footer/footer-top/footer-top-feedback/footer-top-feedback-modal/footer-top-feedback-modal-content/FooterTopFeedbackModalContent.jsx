import FooterTopFeedbackModalContentForm from "./footer-top-feedback-modal-content-form/FooterTopFeedbackModalContentForm";
import FooterTopFeedbackModalContentHeader from "./footer-top-feedback-modal-content-header/FooterTopFeedbackModalContentHeader";

const FooterTopFeedbackModalContent = ({ setOpenModal }) => {
  return (
    <div className="footer-top-feedback-modal-content">
      <FooterTopFeedbackModalContentHeader setOpenModal={setOpenModal} />

      <FooterTopFeedbackModalContentForm />
    </div>
  );
};

export default FooterTopFeedbackModalContent;
