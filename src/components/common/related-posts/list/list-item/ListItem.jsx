import { BsArrowRight } from "react-icons/bs";

const ListItem = ({ item }) => {
  return (
    <li className="list-item">
      <div className="list-item-images">
        <img src={item.img} alt="img" />
      </div>

      <div className="list-item-desc">
        <p className="list-item-desc-date">{item.date}</p>

        <p className="list-item-desc-txt">{item.desc}</p>

        <button className="list-item-desc-btn">
          Читать <BsArrowRight />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
