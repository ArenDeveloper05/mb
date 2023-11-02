import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const EventsPartModal = ({ setShowModal }) => {
  const [val, setVal] = useState("Нет мероприятий");

  const handleInpOnChange = (evt) => {
    setVal(evt.target.value);
  };

  const handleCancelModal = () => {
    setShowModal(false);
  };

  return (
    <div className="events-part-modal">
      <div className="events-part-modal-cont">
        <input type="text" value={val} onChange={handleInpOnChange} readOnly />
        <button onClick={handleCancelModal}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default EventsPartModal;
