import { useSelector } from "react-redux";
import EventsListItem from "./events-list-item/EventsListItem";

const EventsList = () => {
  const eventsListData = useSelector((state) => state.eventsList.eventsList);

  return (
    <ul className="news-right-side-events-list">
      {eventsListData.map((item) => {
        return <EventsListItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default EventsList;
