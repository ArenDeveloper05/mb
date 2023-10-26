import { useState } from "react";
import EventsListItemDate from "./events-list-item-date/EventsListItemDate";
import EventsListItemDesc from "./events-list-item-desc/EventsListItemDesc";

const EventsListItem = ({ item }) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleShowDesc = () => {
    setShowDesc((prev) => (prev = !prev));
  };

  return (
    <li className="news-right-side-events-list-item">
      <EventsListItemDate item={item} handleShowDesc={handleShowDesc} />

      {showDesc && <EventsListItemDesc item={item} />}
    </li>
  );
};

export default EventsListItem;
