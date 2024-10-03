import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "./Button";

function HeaderSettings() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative flex items-center justify-center">
        <HiMagnifyingGlass className="absolute left-1 top-[25%] translate-y-[-12.5%] fill-whi" />
        <input
          className="f flex h-7 w-[12rem] items-center rounded-full border-2 border-solid border-dark bg-lightest pl-6 text-xs text-whi duration-150 placeholder:text-sm placeholder:text-whi focus:scale-x-105 focus:outline-none focus:ring"
          type="text"
          placeholder="Search for city"
        />
      </div>
      <select className="h-8 rounded-full border-2 border-solid border-dark bg-lightest text-center text-xs text-whi">
        <option>ENG</option>
        <option>LT</option>
      </select>
      <div className="flex gap-1 rounded-full border-2 border-solid border-dark bg-lightest p-1">
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
