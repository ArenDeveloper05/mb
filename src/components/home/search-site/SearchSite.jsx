import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchSite = () => {
  const [search, setSearch] = useState("");

  const handleSearchInput = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <div className="home-search-site">
      <form className="home-search-site-form">
        <input
          type="text"
          placeholder="Поиск по сайту"
          className="home-search-site-form-input"
          value={search}
          onChange={handleSearchInput}
        />

        <button className="home-search-site-form-btn">
          <BiSearch className="home-search-site-form-btn-icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchSite;
