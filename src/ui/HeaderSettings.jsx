import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "./Button";

function HeaderSettings() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative flex items-center justify-center">
        <HiMagnifyingGlass className="fill-whi absolute left-1 top-[25%] translate-y-[-12.5%]" />
        <input
          className="bg-lightest placeholder:text-whi text-whi border-dark flex h-7 w-[12rem] items-center rounded-full border-2 border-solid pl-6 text-xs placeholder:text-sm"
          type="text"
          placeholder="Search for city"
        />
      </div>
      <select className="bg-lightest text-whi border-dark h-8 rounded-full border-2 border-solid text-center text-xs">
        <option>ENG</option>
        <option>LT</option>
      </select>
      <div className="bg-lightest border-dark flex gap-1 rounded-full border-2 border-solid p-1">
        <Button>
          C<span>&deg;</span>
        </Button>
        <Button>
          F<span>&deg;</span>
        </Button>
      </div>
    </div>
  );
}

export default HeaderSettings;
