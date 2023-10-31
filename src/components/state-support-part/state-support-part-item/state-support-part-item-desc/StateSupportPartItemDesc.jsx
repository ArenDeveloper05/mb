import { BsArrowRight } from "react-icons/bs";

const StateSupportPartItemDesc = ({ item }) => {
  return (
    <div className="state-support-part-item-desc">
      <a
        href={item.desc_link.desc_link_url}
        className="state-support-part-item-desc-link"
      >
        {item.desc_link.desc_link_title}
      </a>

      <p className="state-support-part-item-desc-txt">{item.desc_txt}</p>

      <button className="state-support-part-item-desc-btn">
        Читать{" "}
        <BsArrowRight className="state-support-part-item-desc-btn-icon" />
      </button>
    </div>
  );
};

export default StateSupportPartItemDesc;
