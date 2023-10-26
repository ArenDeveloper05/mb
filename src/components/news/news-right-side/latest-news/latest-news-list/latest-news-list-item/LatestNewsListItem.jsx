const LatestNewsListItem = ({ item }) => {
  return (
    <li className="news-right-side-latest-news-list-item">
      <a href={item.link}>{item.title}</a>
    </li>
  );
};

export default LatestNewsListItem;
