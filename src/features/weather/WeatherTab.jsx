import { WeatherSvg } from "weather-icons-animated";
import { formatTemp, getWeatherIcon } from "../../utils/helpers";

function weatherTab({ weather, unit }) {
  const { temp, time, code } = weather;
  const formatedTime = time.slice(12).slice(0, 4);

  return (
    <div className="overflow-hidden rounded-md bg-darkest p-1">
      <p>{formatedTime}</p>
      <WeatherSvg state={getWeatherIcon(code, true)} height={15} />
      <p>{formatTemp(temp, unit)}</p>
    </div>
  );
}

export default weatherTab;
