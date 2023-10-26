import EventsBtns from "./events-btns/EventsBtns";
import EventsList from "./events-list/EventsList";
import EventsSearch from "./events-search/EventsSearch";

const Events = () => {
  return (
    <div className="news-right-side-events">
      <EventsSearch />

      <EventsBtns />

      <EventsList />
    </div>
  );
};

export default Events;
