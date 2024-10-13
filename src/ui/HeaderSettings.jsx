import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useUnit } from "../contexts/UnitContext";
import { useLocation } from "../contexts/LocationContext";

function HeaderSettings() {
  const { unit, setUnit } = useUnit();
  const { location, setLocation } = useLocation();

  const [cityInput, setCityInput] = useState(location); // Hold the input value
  const [debouncedCity, setDebouncedCity] = useState(location); // Debounced value

  const pos =
    unit === "C"
      ? "translate-x-[-70%] translate-y-[-10%]"
      : "translate-x-[20%] translate-y-[-10%]";

  // Debounce effect: Update debouncedCity after 300ms of no typing
  useEffect(() => {
    const handler = setTimeout(() => {
      if (cityInput && cityInput.length >= 3) {
        // Only update if input has 3 or more characters
        setDebouncedCity(cityInput);
      }
    }, 300); // 300ms delay

    return () => {
      clearTimeout(handler); // Clear the timeout if input changes before delay
    };
  }, [cityInput]); // Run this effect whenever the input changes

  // Update location when the debounced city changes
  useEffect(() => {
    setLocation(debouncedCity);
  }, [debouncedCity, setLocation]);

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative flex items-center justify-center">
        <HiMagnifyingGlass className="absolute left-2 top-[25%] z-20 h-6 w-6" />

        <input
          className="flex h-11 w-[18rem] items-center rounded-full border-2 border-solid border-dark bg-lightest pl-9 text-base text-darkest placeholder:text-sm placeholder:text-dark focus:scale-x-105 focus:border-transparent focus:ring-0"
          type="text"
          placeholder="Search for city"
          defaultValue={cityInput}
          onChange={(e) => setCityInput(e.target.value)} // Update input state
        />
      </div>

      <select className="h-11 rounded-2xl border-2 border-solid border-dark bg-lightest text-center text-base text-dark">
        <option>ENG</option>
        <option>LT</option>
      </select>

      <div className="flex h-11 w-[4rem] items-center justify-center gap-1 rounded-2xl border-2 border-solid border-dark bg-lightest">
        <Button
          type="toggle"
          unit={unit}
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
