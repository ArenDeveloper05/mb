import { MdKeyboardArrowDown } from "react-icons/md";
import FaqItemFooter from "./faq-item-footer/FaqItemFooter";
import parse from "html-react-parser";

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
          <MdKeyboardArrowDown
            style={{
              transition: "0.25s",
              transform: `rotate(${item.open ? "180deg" : "0deg"})`,
            }}
          />
        </div>
      </div>
      <div className={`faq-list-item-description `}>
        {parse(item.description)}
      </div>
      <FaqItemFooter />
    </li>
  );
};

export default FaqItem;
