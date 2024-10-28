import { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import { useUnit } from "../contexts/UnitContext";
import { useLocation } from "../contexts/LocationContext";

function HeaderSettings() {
  const { unit, setUnit } = useUnit();
  const { location, setLocation } = useLocation();

  const [cityInput, setCityInput] = useState(location);
  const [debouncedCity, setDebouncedCity] = useState(location);

  const pos =
    unit === "C"
      ? "translate-x-[-70%] translate-y-[-10%]"
      : "translate-x-[20%] translate-y-[-10%]";

  // Custom debounce function
  const debounceInput = useCallback(() => {
    const handler = setTimeout(() => {
      if (cityInput && cityInput.length >= 3) {
        setDebouncedCity(cityInput);
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [cityInput]);

  useEffect(() => {
    debounceInput();
  }, [debounceInput]);

  // Update location only when debounced city changes and avoid initial set loop
  useEffect(() => {
    if (debouncedCity !== location) {
      setLocation(debouncedCity);
    }
  }, [debouncedCity, setLocation, location]);

  return (
    <div className="flex items-center justify-center gap-2">
      <SearchBar
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        placeholder="Search for city"
      />

      <label aria-label="Language Selector">
        <select className="h-11 rounded-2xl border-2 border-solid border-dark bg-lightest text-center text-base text-dark">
          <option>ENG</option>
          <option>LT</option>
        </select>
      </label>

      <label aria-label="Temperature Unit Selector">
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
      </label>
    </div>
  );
}

export default HeaderSettings;
