import SearchIcon from "../utils/SearchIcon";

function SearchBar() {
  return (
    <div className="flex w-96 items-center relative">
      <div className="absolute left-3">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search for products, brands, and more"
        className="border rounded-sm w-full text-sm pl-12 py-2 text-black bg-gray-100 input-placeholder focus:outline-none focus:bg-white"
      />
    </div>
  );
}

export default SearchBar;
