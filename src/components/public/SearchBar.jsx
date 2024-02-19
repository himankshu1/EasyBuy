import { useState } from "react";
import SearchIcon from "../../assets/Icons/SearchIcon";
import { useQuery } from "@tanstack/react-query";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearchProducts = (event) => {
    event.preventDefault();
    searchText && console.log(searchText);
  };

  const handleInputChangeValue = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="flex w-96 items-center relative">
      <div className="absolute left-3">
        <SearchIcon />
      </div>

      <form className="w-full" onSubmit={handleSearchProducts}>
        <input
          type="text"
          placeholder="Search for products, brands, and more"
          className="border rounded-sm w-full text-sm pl-12 py-2 text-black bg-gray-100 input-placeholder focus:outline-none focus:bg-white"
          onChange={handleInputChangeValue}
          value={searchText}
        />
      </form>
    </div>
  );
}

export default SearchBar;
