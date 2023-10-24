import NavLinksLinkIcons from "./nav-links-link-icons/NavLinksLinkIcons";

const NavLinksLink = ({ item }) => {
  return (
    <li className="nav-links-link">
      <NavLinksLinkIcons item={item} />

      <a href={item.url}>{item.title}</a>
    </li>
  );
};

export default NavLinksLink;
