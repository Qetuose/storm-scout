import { WeatherSvg } from "weather-icons-animated";
import { useWeather } from "../features/weather/useWeather";
import { formatTemp, getWeatherIconAnimated } from "../utils/helpers";
import { useUnit } from "../contexts/UnitContext";
import { Spinner } from "@material-tailwind/react";

function CurrentStat() {
  const { weather, isLoading } = useWeather();
  const { unit } = useUnit();

  if (isLoading)
    return (
      <div className="col-[1/-1] row-[1/-1] grid items-center justify-center">
        <Spinner className="h-12 w-12" color="purple" />
      </div>
    );

  const { country, name: city, current } = weather;
  const {
    temperature_2m: temp,
    relative_humidity_2m: humidity,
    wind_speed_10m: windspeed,
    weather_code,
  } = current;

  const pStyle = "text-whiDarker text-xs";
  const h3Style = "text-lg";

  return (
    <div className="flex items-center justify-around text-whi">
      <div className="rounded-xl bg-dark shadow-md shadow-black/40">
        <WeatherSvg
          state={getWeatherIconAnimated(weather_code)}
          width={75}
          height={75}
        />
      </div>
      <div>
        <h3 className={h3Style}>{city}</h3>
        <p className={pStyle}>{country}</p>
      </div>
      <div>
        <h3 className={h3Style}>{formatTemp(temp, unit)}&deg;</h3>
        <p className={pStyle}>Temperature</p>
      </div>
      <div>
        <h3 className={h3Style}>{humidity}%</h3>
        <p className={pStyle}>Humidity</p>
      </div>
      <div>
        <h3 className={h3Style}>{windspeed} km/h</h3>
        <p className={pStyle}>Wind speed</p>
      </div>
    </div>
  );
}

export default CurrentStat;
