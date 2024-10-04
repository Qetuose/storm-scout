import { useCurrentPosition } from "../features/weather/useCurrentPosition";
import { useReverseGeo } from "../features/weather/useReverseGeo";
import { useWeather } from "../features/weather/useWeather";
import Container from "../ui/Container";
import CurrentStats from "../ui/CurrentStats";
import { Spinner } from "@material-tailwind/react";
import WeatherTab from "../features/weather/weatherTab";
import { useUnit } from "../contexts/UnitContext";

function Dashboard() {
  const { unit } = useUnit();
  //Gets users location
  const { isLoading: isLoadingCurrentPosition, currentPosition } =
    useCurrentPosition();
  const { isLoading: isLoadingReverseGeo, reverseGeo } =
    useReverseGeo(currentPosition);

  //Setting location for weather forecast
  const { isLoading: isLoadingWeather, weather } = useWeather(reverseGeo);

  if (isLoadingCurrentPosition || isLoadingReverseGeo || isLoadingWeather)
    return (
      <div className="col-[1/-1] row-[1/-1] grid items-center justify-center">
        <Spinner className="h-12 w-12" color="purple" />
      </div>
    );

  return (
    <Container>
      <CurrentStats />
      <div className="flex justify-between">
        {weather.days.at(0).hours.map((hour) => (
          <WeatherTab key={hour.datetime} weather={hour} />
        ))}
      </div>
    </Container>
  );
}

export default Dashboard;
