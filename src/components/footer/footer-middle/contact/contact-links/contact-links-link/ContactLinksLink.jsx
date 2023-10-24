const ContactLinksLink = ({ item }) => {
  return (
    <li className="footer-middle-contact-links-link">
      <item.icon className="footer-middle-contact-links-link-icon" />
      <a href={item.url}>{item.title}</a>
    </li>
  );
};

export default ContactLinksLink;
