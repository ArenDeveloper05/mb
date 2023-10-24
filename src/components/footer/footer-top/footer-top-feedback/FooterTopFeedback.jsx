import { useState } from "react";
import FooterTopFeedbackDesc from "./footer-top-feedback-desc/FooterTopFeedbackDesc";
import FooterTopFeedbackModal from "./footer-top-feedback-modal/FooterTopFeedbackModal";

const FooterTopFeedback = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal((prev) => (prev = true));
  };

  return (
    <div className="footer-top-feedback">
      <FooterTopFeedbackDesc />

      <button className="footer-top-feedback-btn" onClick={handleOpenModal}>
        Обратная связь
      </button>

      {openModal && <FooterTopFeedbackModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default FooterTopFeedback;
