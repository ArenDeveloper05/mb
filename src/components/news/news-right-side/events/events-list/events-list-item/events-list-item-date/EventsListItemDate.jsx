const EventsListItemDate = ({ item, handleShowDesc }) => {
  return (
    <div
      className="news-right-side-events-list-item-date"
      onClick={handleShowDesc}
    >
      <p className="news-right-side-events-list-item-date-day">
        {item.date_day}
      </p>

      <p className="news-right-side-events-list-item-date-month">
        {item.date_month}
      </p>

      <p className="news-right-side-events-list-item-date-title">
        {item.title}
      </p>
    </div>
  );
};

export default EventsListItemDate;
