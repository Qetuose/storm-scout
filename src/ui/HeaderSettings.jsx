import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "./Button";
import { useUnit } from "../contexts/UnitContext";
import { useLocation } from "../contexts/LocationContext";
import { useChangeWeather } from "../features/weather/useChangeWeather";

function HeaderSettings() {
  const { unit, setUnit } = useUnit();
  const { location, setLocation } = useLocation();
  const { changeWeather } = useChangeWeather(location);

  function submitHandler(e) {
    e.preventDefault();
  }

  const pos =
    unit === "C"
      ? "translate-x-[-70%] translate-y-[-10%]"
      : "translate-x-[20%] translate-y-[-10%]";

  return (
    <div className="flex items-center justify-center gap-2">
      {/* <SearchForm /> */}
      <div className="relative flex items-center justify-center">
        <HiMagnifyingGlass className="translate-y-25%] absolute left-2 top-[25%] z-20 h-6 w-6 fill-whi" />
        <form onSubmit={submitHandler}>
          <input
            className="flex h-11 w-[18rem] items-center rounded-full border-2 border-solid border-dark border-transparent bg-lightest pl-9 text-base text-whi duration-150 placeholder:text-sm placeholder:text-whi focus:scale-x-105 focus:border-transparent focus:ring-0"
            type="text"
            placeholder="Search for city"
            defaultValue={location}
            onChange={(e) => {
              setLocation(e.target.value);
              console.log(location);
              changeWeather(location);
            }}
          />
        </form>
      </div>
      <select className="h-11 rounded-2xl border-2 border-solid border-dark bg-lightest text-center text-base text-whi">
        <option>ENG</option>
        <option>LT</option>
      </select>
      <div className="flex h-11 w-[4rem] items-center justify-center gap-1 rounded-2xl border-2 border-solid border-dark bg-lightest">
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
            className={`absolute right-0 top-0 ${pos} h-7 w-7 rounded-lg bg-whi transition-all duration-300`}
          />
        </Button>
      </div>
    </div>
  );
}

export default HeaderSettings;
