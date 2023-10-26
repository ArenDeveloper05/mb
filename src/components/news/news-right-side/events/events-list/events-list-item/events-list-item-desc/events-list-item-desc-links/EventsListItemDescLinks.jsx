const EventsListItemDescLinks = ({ item }) => {
  return (
    <div className="news-right-side-events-list-item-desc-links">
      <a href={item.desc.desc_links.desc_links_link1.desc_links_link1_url}>
        {item.desc.desc_links.desc_links_link1.desc_links_link1_title}
      </a>

      <a href={item.desc.desc_links.desc_links_link2.desc_links_link2_url}>
        {item.desc.desc_links.desc_links_link2.desc_links_link2_title}
      </a>
    </div>
  );
};

export default EventsListItemDescLinks;
