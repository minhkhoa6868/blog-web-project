import { useState } from "react";
import SeachIcon from "../../icons/SearchIcon";

const SearchBar = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div 
        id="search-bar"
        className={`flex items-center justify-between mx-auto px-[10px] py-[5px] mt-[15px] rounded-xl border-[2px] w-[400px] sm:w-[520px] md:w-[600px] 
        transition-all ease duration-300 ${isFocus ? 'border-violet-400' : 'border-violet-300'}`}
    >
      <input
        type="text"
        placeholder="Search..."
        id="search-place"
        className="w-11/12 outline-none text-[0.9rem] bg-transparent"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <button
        className="flex justify-center items-center transition ease-out duration-300 hover:bg-gray-200 fill-gray-600 
        w-[30px] h-[30px] rounded-full dark:hover:bg-gray-600 dark:fill-gray-400"
      >
        <SeachIcon width="13" />
      </button>
    </div>
  );
};

export default SearchBar;