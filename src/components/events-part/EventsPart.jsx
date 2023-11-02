import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import "./EventsPart.scss";
import EventsPartInput from "./events-part-input/EventsPartInput";
import EventsPartModal from "./events-part-modal/EventsPartModal";

const EventsPart = () => {
  const [value, onChange] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const handleDayOnClick = (evt) => {
    setShowModal(true);
  };

  return (
    <div className="events-part">
      <EventsPartInput />

      <Calendar
        value={value}
        onChange={onChange}
        locale="ru-RU"
        onClickDay={handleDayOnClick}
        className="events-part-calendar"
      />

      {showModal && <EventsPartModal setShowModal={setShowModal} />}
    </div>
  );
};

export default EventsPart;
