import { useState } from "react";

const EventsListSearch = () => {
  const [evtValue, setEvtValue] = useState("");

  const handleEvtValue = (evt) => {
    setEvtValue(evt.target.value);
  };

  return (
    <div className="news-right-side-events-search">
      <input
        type="text"
        placeholder="Поиск мероприятий"
        value={evtValue}
        onChange={handleEvtValue}
      />
    </div>
  );
};

export default EventsListSearch;
