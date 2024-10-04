import { WeatherSvg } from "weather-icons-animated";
import { useReverseGeo } from "../features/weather/useReverseGeo";
import { useWeather } from "../features/weather/useWeather";
import { convertToCelcius } from "../utils/helpers";
import { useUnit } from "../contexts/UnitContext";

function CurrentStat() {
  const { unit } = useUnit();
  const { reverseGeo } = useReverseGeo();
  const { weather } = useWeather();

  const { country, city } = reverseGeo;
  const { temp, humidity, windspeed } = weather.currentConditions;

  const pStyle = "text-whiDarker text-xs";
  const h3Style = "text-lg";

  function formatTemp(temp) {
    let formatedTemp;
    if (unit === "F" && Number(temp) > 0) formatedTemp = `+${temp + unit}`;
    if (unit === "C" && convertToCelcius(temp) > 0)
      formatedTemp = `+${convertToCelcius(temp) + unit}`;

    return formatedTemp;
  }

  return (
    <div className="flex items-center justify-around text-whi">
      <div className="rounded-xl bg-dark shadow-md shadow-black/40">
        <WeatherSvg state="rainy" width={75} height={75} />
      </div>
      <div>
        <h3 className={h3Style}>{city}</h3>
        <p className={pStyle}>{country}</p>
      </div>
      <div>
        <h3 className={h3Style}>{formatTemp(temp)}&deg;</h3>
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
