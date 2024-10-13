import { getWeatherIcon } from "../utils/helpers";
import Container from "./Container";
import WeatherIcon from "react-icons-weather";

function ForecastTab({ data }) {
  console.log(data.code);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <WeatherIcon name="owm" iconId={getWeatherIcon(+data.code)} />
        <p>
          <span>{data.tempDay}</span>/<span>{data.tempNight}</span>
        </p>
      </div>
      <p>{data.date}</p>
    </div>
  );
}

export default ForecastTab;
