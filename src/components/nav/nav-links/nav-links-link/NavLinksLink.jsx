import { useNavigate } from "react-router-dom";
import NavLinksLinkIcons from "./nav-links-link-icons/NavLinksLinkIcons";

const NavLinksLink = ({ item }) => {
  const navigate = useNavigate();

  return (
    <li
      className="nav-links-link"
      onClick={() => {
        navigate(item.url);
      }}
    >
      <NavLinksLinkIcons item={item} />
      <p>{item.title}</p>
    </li>
  );
};

export default NavLinksLink;
