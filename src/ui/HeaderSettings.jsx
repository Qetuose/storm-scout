import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "./Button";
import { useUnit } from "../contexts/UnitContext";

function HeaderSettings() {
  const { unit, setUnit } = useUnit();
  const pos = unit === "C" ? "translate-x-[-10%]" : "translate-x-[100%] ";

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
        <Button
          type="toggle"
          onClick={() => setUnit((unit) => (unit === "F" ? "C" : "F"))}
        >
          <span className={unit === "C" ? "z-10 text-darkest" : ""}>
            C&deg;
          </span>
          <span className={unit === "F" ? "z-10 text-darkest" : ""}>
            F&deg;
          </span>
          <span
            className={`absolute ${pos} h-5 w-5 rounded-full bg-whi transition-all duration-300`}
          />
        </Button>
      </div>
    </div>
  );
}

export default HeaderSettings;
