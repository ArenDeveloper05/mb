import { useState } from "react";
import FeedbackModal from "../../common/feedback-modal/FeedbackModal";

const FeedbackButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Обратная связь
      </button>

      {openModal && <FeedbackModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default FeedbackButton;
