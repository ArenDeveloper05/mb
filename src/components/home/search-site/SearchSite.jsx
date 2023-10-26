import { useState } from "react";
import BaseSearch from "../../common/base-search/BaseSearch";

const SearchSite = () => {
  const [search, setSearch] = useState("");

  const handleSearchInput = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <div className="home-search-site">
      <BaseSearch value={search} handleInputOnchange={handleSearchInput} />
    </div>
  );
};

export default SearchSite;
