const StateSupportLinksLink = ({ item }) => {
  return (
    <li className="footer-middle-state-support-links-link">
      <a href={item.url}>{item.title}</a>
    </li>
  );
};

export default StateSupportLinksLink;
