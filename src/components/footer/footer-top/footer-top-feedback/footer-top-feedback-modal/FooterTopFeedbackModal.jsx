import FooterTopFeedbackModalContent from "./footer-top-feedback-modal-content/FooterTopFeedbackModalContent";

const FooterTopFeedbackModal = ({ setOpenModal }) => {
  return (
    <div className="footer-top-feedback-modal">
      <FooterTopFeedbackModalContent setOpenModal={setOpenModal} />
    </div>
  );
};

export default FooterTopFeedbackModal;
