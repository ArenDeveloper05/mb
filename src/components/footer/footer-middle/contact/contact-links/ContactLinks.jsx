import { footerConfig } from "../../../../../config";
import ContactLinksLink from "./contact-links-link/ContactLinksLink";

const ContactLinks = () => {
  return (
    <ul className="footer-middle-contact-links">
      {footerConfig.contactConfig.map((item) => {
        return <ContactLinksLink key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ContactLinks;
