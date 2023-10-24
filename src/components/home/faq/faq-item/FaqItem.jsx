import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import FaqItemFooter from "./faq-item-footer/FaqItemFooter";

const FaqItem = ({ item, changeActive }) => {
  return (
    <li
      className={`faq-list-item ${item.open ? "faq-open" : ""} ${
        item.close ? "faq-close" : ""
      }`}
      onClick={() => {
        changeActive(item.id);
      }}
    >
      <div className="faq-list-item-title">
        {item.title}
        <div className="faq-list-item-title-icon">
          <MdKeyboardArrowUp />
        </div>
      </div>
      <div className={`faq-list-item-description `}>{item.description}</div>
      <FaqItemFooter />
    </li>
  );
};

export default FaqItem;
