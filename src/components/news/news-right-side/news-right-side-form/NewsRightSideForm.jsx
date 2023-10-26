import { useState } from "react";
import BaseSearch from "../../../common/base-search/BaseSearch";

const NewsRightSideForm = () => {
  const [inputVal, setInputVal] = useState("");

  const handleInputOnChange = (evt) => {
    setInputVal(evt.target.value);
  };

  return (
    <div className="news-right-side-form">
      <BaseSearch value={inputVal} handleInputOnchange={handleInputOnChange} />
    </div>
  );
};

export default NewsRightSideForm;
