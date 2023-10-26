const AboutCenterLinksLink = ({ item }) => {
  return (
    <li className="footer-middle-about-center-links-link">
      <a href={item.url}>{item.title}</a>
    </li>
  );
};

export default AboutCenterLinksLink;
