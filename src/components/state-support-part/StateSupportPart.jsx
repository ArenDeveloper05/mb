import { useSelector } from "react-redux";
import "./StateSupportPart.scss";
import StateSupportPartItem from "./state-support-part-item/StateSupportPartItem";

const StateSupportPart = () => {
  const stateSupportData = useSelector(
    (state) => state.stateSupport.stateSupport
  );

  return (
    <div className="state-support-part">
      {stateSupportData.map((item) => {
        return <StateSupportPartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default StateSupportPart;
