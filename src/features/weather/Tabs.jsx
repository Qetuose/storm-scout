import { useUnit } from "../../contexts/UnitContext";
import { formatTemp, formatTime, getWeatherIcon } from "../../utils/helpers";
import WeatherIcon from "react-icons-weather";

function Tabs({ weather }) {
  const { unit } = useUnit();
  const { temp, time, code } = weather;
  console.log(code);

  return (
    <div>
      <div className="mx-2 flex w-[5rem] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-dark p-2 text-base">
        <p>{formatTime(time)}</p>
        <WeatherIcon name="owm" iconId={getWeatherIcon(code)} />
        <p>{formatTemp(temp, unit)}</p>
      </div>
    </div>
  );
}

export default Tabs;
