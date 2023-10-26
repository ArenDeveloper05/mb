import "./BaseSearch.scss";

import { BiSearch } from "react-icons/bi";

const BaseSearch = ({ value, handleInputOnchange, callBack }) => {
  return (
    <form className="base-search-form">
      <input
        type="text"
        placeholder="Поиск по сайту"
        className="base-search-form-input"
        value={value}
        onChange={handleInputOnchange}
      />

      <button className="base-search-form-btn">
        <BiSearch
          className="base-search-form-btn-icon"
          onClick={() => {
            callBack && callBack();
          }}
        />
      </button>
    </form>
  );
};

export default BaseSearch;
