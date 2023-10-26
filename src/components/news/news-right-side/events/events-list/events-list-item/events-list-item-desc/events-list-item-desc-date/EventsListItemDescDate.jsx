const EventsListItemDescDate = ({ item }) => {
  return (
    <div className="news-right-side-events-list-item-desc-date">
      <p className="news-right-side-events-list-item-desc-date-title">ВРЕМЯ</p>

      <p className="news-right-side-events-list-item-desc-date-txt">
        {item.desc.desc_date}
      </p>
    </div>
  );
};

export default EventsListItemDescDate;
