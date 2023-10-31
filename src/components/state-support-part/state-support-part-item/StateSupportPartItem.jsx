import { useNavigate } from "react-router-dom";
import StateSupportPartItemDesc from "./state-support-part-item-desc/StateSupportPartItemDesc";
import StateSupportPartItemImage from "./state-support-part-item-image/StateSupportPartItemImage";

const StateSupportPartItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="state-support-part-item"
      onClick={() => {
        navigate(`/state_support/${item.id}`);
      }}
    >
      <StateSupportPartItemImage item={item} />

      <StateSupportPartItemDesc item={item} />
    </div>
  );
};

export default StateSupportPartItem;
