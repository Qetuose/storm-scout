import { WeatherSvg } from "weather-icons-animated";
import { useWeather } from "./useWeather";
import { formatTemp, getWeatherIcon } from "../../utils/helpers";
import { Spinner } from "@material-tailwind/react";
import { useUnit } from "../../contexts/UnitContext";
import { useLocation } from "../../contexts/LocationContext";
import { useEffect } from "react";

function CurrentStat() {
  const { location: locationInput } = useLocation();
  const { weather, isLoading } = useWeather(locationInput);
  const { unit } = useUnit();

  if (isLoading)
    return (
      <div className="col-[1/-1] row-[1/-1] grid items-center justify-center">
        <Spinner className="h-12 w-12" color="purple" />
      </div>
    );

  const { location, current } = weather;

  const {
    temperature_2m: temp,
    relative_humidity_2m: humidity,
    wind_speed_10m: windspeed,
    weather_code,
  } = current;

  const pStyle = "text-whiDarker text-md";
  const h3Style = "text-3xl";
  const divStyle = "flex flex-col gap-1 items-center justify-center";

  return (
    <div className="flex items-center justify-around text-whi">
      <div className="rounded-xl bg-dark shadow-md shadow-black/40">
        <WeatherSvg
          state={getWeatherIcon(weather_code, true)}
          width={100}
          height={100}
        />
      </div>
      <div className={divStyle}>
        <h3 className={h3Style}>{location.city}</h3>
        <p className={pStyle}>{location.country}</p>
      </div>
      <div className={divStyle}>
        <h3 className={h3Style}>{formatTemp(temp, unit)}&deg;</h3>
        <p className={pStyle}>Temperature</p>
      </div>
      <div className={divStyle}>
        <h3 className={h3Style}>{humidity}%</h3>
        <p className={pStyle}>Humidity</p>
      </div>
      <div className={divStyle}>
        <h3 className={h3Style}>{windspeed} km/h</h3>
        <p className={pStyle}>Wind speed</p>
      </div>
    </div>
  );
}

export default CurrentStat;
