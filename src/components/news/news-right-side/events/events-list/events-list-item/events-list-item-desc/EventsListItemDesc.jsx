import EventsListItemDescDate from "./events-list-item-desc-date/EventsListItemDescDate";
import EventsListItemDescLinks from "./events-list-item-desc-links/EventsListItemDescLinks";

const EventsListItemDesc = ({ item }) => {
  return (
    <div className="news-right-side-events-list-item-desc">
      <p className="news-right-side-events-list-item-desc-title">
        ДЕТАЛИ МЕРОПРИЯТИЯ
      </p>

      <EventsListItemDescDate item={item} />

      <EventsListItemDescLinks item={item} />
    </div>
  );
};

export default EventsListItemDesc;
