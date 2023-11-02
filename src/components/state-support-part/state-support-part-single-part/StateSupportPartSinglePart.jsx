import { useParams } from "react-router-dom";
import "./StateSupportPartSinglePart.scss";
import StateSupportPartSinglePartImages from "./state-support-part-single-part-images/StateSupportPartSinglePartImages";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import StateSupportPartSinglePartDesc from "./state-support-part-single-part-desc/StateSupportPartSinglePartDesc";

const StateSupportPartSinglePart = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const stateSupportSingleData = useSelector(
    (state) => state.stateSupport.stateSupport
  );

  useEffect(() => {
    const itemObject = stateSupportSingleData.find((obj) => obj.id === +id);

    if (itemObject) {
      setItem(itemObject);
    }
  }, [id, stateSupportSingleData]);

  return (
    <div className="state-support-single-page">
      <StateSupportPartSinglePartImages item={item} />

      <StateSupportPartSinglePartDesc item={item} />
    </div>
  );
};

export default StateSupportPartSinglePart;
