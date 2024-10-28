import { getWeatherIcon } from "../utils/helpers";
import WeatherIcon from "react-icons-weather";

function SavedLocationTab() {
  return (
    <div className="relative flex w-[12rem] cursor-pointer flex-col items-center justify-center rounded-2xl bg-lightest text-whi">
      <WeatherIcon
        name="owm"
        iconId={getWeatherIcon(0)}
        className="absolute left-[50%] top-0 flex h-[2.5rem] w-[2.5rem] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full bg-whiDarker text-xl text-dark"
      />
      <p className="mb-1 text-3xl">Vilnius</p>
      <p className="mb-4 text-base text-whiDarker">Lithuania</p>
      <p className="text-2xl">12&deg;/4&deg;</p>
    </div>
  );
}

export default SavedLocationTab;
