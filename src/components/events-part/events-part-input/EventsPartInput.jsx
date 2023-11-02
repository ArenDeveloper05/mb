import { useState } from "react";

const EventsPartInput = () => {
  const [val, setVal] = useState("");

  const handleInpOnChange = (evt) => {
    setVal(evt.target.value);
  };

  return (
    <div className="events-part-search">
      <input
        type="text"
        placeholder="Поиск мероприятий"
        value={val}
        onChange={handleInpOnChange}
      />
    </div>
  );
};

export default EventsPartInput;
