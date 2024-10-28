import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchBar({ value, onChange, placeholder = "Search...", icon }) {
  return (
    <div className="relative flex items-center justify-center">
      {icon || (
        <HiMagnifyingGlass className="absolute left-2 top-[25%] z-20 h-6 w-6" />
      )}

      <input
        className="flex h-11 w-[18rem] items-center rounded-full border-2 border-solid border-dark bg-lightest pl-9 text-base text-darkest placeholder:text-sm placeholder:text-dark focus:scale-x-105 focus:border-transparent focus:ring-0"
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
