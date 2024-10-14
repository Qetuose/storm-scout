import { useUnit } from "../contexts/UnitContext";
import { formatTemp, getWeatherIcon } from "../utils/helpers";

import WeatherIcon from "react-icons-weather";

function ForecastTab({ data }) {
  const { unit } = useUnit();
  return (
    <div className="mx-9 flex items-center justify-between rounded-lg bg-dark p-4 text-whi">
      <div className="flex items-center gap-2">
        <WeatherIcon
          name="owm"
          iconId={getWeatherIcon(+data.code)}
          className="text-3xl"
        />
        <p>
          <span className="text-2xl">
            {formatTemp(data.tempDay, unit)}&deg;
          </span>
          /
          <span className="text-lg text-whiDarker">
            {formatTemp(data.tempNight, unit)}&deg;
          </span>
        </p>
      </div>
      <p>{data.date}</p>
    </div>
  );
}

export default ForecastTab;
